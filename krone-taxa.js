/*
 * Denne fil kalder en funktion i filen start.js, der ligger i library-mappen, 
 * og som I ikke skal ændre ved i denne opgave. Til gengæld kunne man forestille 
 * sig at der her blev indsat et
 */
class KroneTaxa {
    calculatePrice(afstand, tidgaaet){
        var price = (9*(afstand-1));
        var under1km = (5*Math.min(1, afstand));
        var tidpris = (6.25*tidgaaet + 39);

        return price + under1km + tidpris;
    }
}
start (new Taxameter(new KroneTaxa()));