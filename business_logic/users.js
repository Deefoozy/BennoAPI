import { StatieGeldLogic } from './statieGeld.js';

export class UserLogic {
    static async expandInfo(user) {
        const statieGeld = await StatieGeldLogic.GetStatieGeld();

        const tempUser = {
            ...user,
            legeKrattekes: UserLogic.calculateKrattekes(user.geinhaleerdBier),
            volleKrattekes: UserLogic.calculateKrattekes(user.bierInKelder, true),
            statieGeldInKelder: 0,
            statieGeldGezopen: 0,
            statieGeldLegeKrattekes: 0,
        };

        tempUser.statieGeldLegeKrattekes = tempUser.legeKrattekes * statieGeld.statieKrat.worth;
        tempUser.statieGeldGezopen = tempUser.geinhaleerdBier * statieGeld.statieFles.worth;
        tempUser.statieGeldInKelder = (
            tempUser.volleKrattekes * statieGeld.statieKrat.worth
        ) + (
            tempUser.bierInKelder * statieGeld.statieFles.worth
        );

        return tempUser;
    }

    static calculateKrattekes(biertjes, vol = false) {
        if (biertjes === 0) return 0;
        
        const kratInhoud = 24

        const result = Math.trunc(biertjes / kratInhoud);

        if (!vol || biertjes % kratInhoud == 0) return result;

        return result + 1;
    }
}
