export class Health {
    #maxHealth
    #currentHealth
    #damageCooldown
    #imunie
    #canheal
    onPlayerHurt
    onPlayerDead
    constructor(maxHealth, damageCooldown) {
        this.#maxHealth = maxHealth;
        this.#currentHealth = maxHealth;
        this.#damageCooldown = damageCooldown;
        this.#imunie = false;
        this.#canheal = true;
        this.onPlayerHurt = new CustomEvent('onPlayerHurt', { detail: this.#currentHealth });
        this.onPlayerDead = new CustomEvent('onPlayerDead');
    }
    getCurrentHealth() {return this.#currentHealth}
    Damage() {
        if (this.#imunie) return;

        this.#currentHealth -= 1;

        if (this.#currentHealth <= 0) {
            document.dispatchEvent(this.onPlayerDead);
            return;
        }
            

        this.StartCooldown();
        document.dispatchEvent(this.onPlayerHurt);
        return this.#currentHealth;
    }
    Heal() {
        if (this.#currentHealth === this.#maxHealth) return;
        if (this.#canheal === false) return;

        this.#currentHealth += 1;
        if (this.#currentHealth > this.#maxHealth)
            this.#currentHealth = this.#maxHealth;
            this.HealCooldown();
        return this.#currentHealth;
    }
    StartCooldown() {
        this.#imunie = true;
        setTimeout(() => {
            this.#imunie = false;
        }, this.#damageCooldown * 1000)
    }
    HealCooldown() {
        this.#canheal = false;
        setTimeout(() => {
            this.#canheal = true;
        }, 1000);
    }
}