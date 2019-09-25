/*
 * Denne fil kalder en funktion i filen start.js, der ligger i library-mappen, 
 * og som I ikke skal ændre ved i denne opgave. Til gengæld kunne man forestille 
 * sig at der her blev indsat et
 */
class KroneTaxaCityBil {
    calulatePrice(afstand, tidgaaet){
        var price = (4.50*(afstand)) + (7*tidgaaet);
        if (price < 75){
            return 75;
        } else {
            return price;
        }
    }
}
start (new Taxameter(new KroneTaxaCityBil()));