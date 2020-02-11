module.exports = class Crypto {

    /**
     *Création d'une instance de la classe Crypto pour chiffrer les mots de passe.
     */
    constructor() {
        this.ALGORITHME = 'aes256'; //algorithme de chiffrement;
        this.PASSWORD = 'l5JmP+GldU45FD52HBdcspzm:!-*/qxn0/1zB%;r8B8?2?2pcqGcL^3'; //clé de chiffrement;
        this.crypto = require('crypto');
    }

    /**
     * @param {string} encrypted - chaîne de caractères à déchiffrer, exemple : 'a85Rn59mP'
     * @returns chaîne de caractères déchiffrée, exemple : 'azerty'
     */
    decrypt(encrypted) {
        let key = this.crypto.scryptSync(this.PASSWORD, 'salt', 32);
        let iv = Buffer.alloc(16, 0); // Initialisation du vector.

        let decipher = this.crypto.createDecipheriv(this.ALGORITHME, key, iv); //déchiffrer, obligation de le réinitialiser pour éviter une erreur
        let decrypted = decipher.update(encrypted, 'hex', 'utf8');

        decrypted += decipher.final('utf8');
        return decrypted;
    }

    /**
     * @param {string} text - chaîne de caractères à chiffrer, exemple : 'azerty'
     * @returns chaîne de caractères chiffrée, exemple : 'a85Rn59mP'
     */
    crypt(text) {
        let key = this.crypto.scryptSync(this.PASSWORD, 'salt', 32);
        let iv = Buffer.alloc(16, 0); // Initialisation du vector.

        let cipher = this.crypto.createCipheriv(this.ALGORITHME, key, iv); //chiffrer, obligation de le réinitialiser pour éviter une erreur
        let crypted = cipher.update(text, 'utf8', 'hex');

        crypted += cipher.final('hex');
        return crypted;
    }
}
