const luxafor = require('./nerdenough-luxafor');

// this seems like the closest thing to null/undefined it'll let me use on a Timer type, which I need below
const nullTimer = setInterval(() => {}, Number.MAX_SAFE_INTEGER);

// this class centralizes all flag LED interactions so that intervals can be cancelled when necessary
class FlagHandler {
    private lightInterval: NodeJS.Timer;

    constructor () {
        // rainbow by default
        this.lightInterval = this.getLightInterval('rainbow');
    }

    private getLightInterval(name: string) {
        switch (name) {
            case 'rainbow':
                return this.getRainbowInterval();
            default:
                clearInterval(this.lightInterval);
                return nullTimer;
        }
    }

    public setLightInterval(name: string) {
        clearInterval(this.lightInterval);
        switch (name) {
            case 'rainbow':
                this.lightInterval = this.getRainbowInterval();
                break;
            default:
        }
    }

    public setLightSolid(colorHex: string | number[]) {
        clearInterval(this.lightInterval);
        if (typeof colorHex === 'string') {
            let r = parseInt(colorHex.substring(1, 3), 16);
            let g = parseInt(colorHex.substring(3, 5), 16);
            let b = parseInt(colorHex.substring(5), 16);
            colorHex = [r, g, b];
        }
        luxafor.color({ led: luxafor.LUXAFOR_LED_FRONT, red: colorHex[0], green: colorHex[1], blue: colorHex[2] });
    }

    private getRainbowInterval() {
        let r = 0;
        let g = 0;
        let b = 255;
        return setInterval(() => {
            if (r < 255 && g === 0 && b === 255) {
                r++;
            } else if (r === 255 && g === 0 && b > 0) {
                b--;
            } else if (r === 255 && g < 255 && b === 0) {
                g++;
            } else if (r > 0 && g === 255 && b === 0) {
                r--;
            } else if (r === 0 && g === 255 && b < 255) {
                b++;
            } else if (r === 0 && g > 0 && b === 255) {
                g--;
            }
            luxafor.color({ led: luxafor.LUXAFOR_LED_FRONT, red: r, green: g, blue: b });
        }, 10);
    }
};

export default FlagHandler;