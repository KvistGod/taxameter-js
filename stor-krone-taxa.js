/*
 * Denne fil kalder en funktion i filen start.js, der ligger i library-mappen, 
 * og som I ikke skal ændre ved i denne opgave. Til gengæld kunne man forestille 
 * sig at der her blev indsat et
 */
class StorKroneTaxa {
    calulatePrice(afstand, tidgaaet){
        return (12*(afstand)) + (6.67*tidgaaet + 69)
    }
}
start (new Taxameter(new StorKroneTaxa()));