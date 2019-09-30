const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Intro',
  };

var windowWidth: any = (window.innerWidth / 2) - 5
var windowHeight: any = (window.innerHeight / 2)

export default class IntroScene extends Phaser.Scene {
    constructor() {
        super(sceneConfig);
    }

    public create() {
        this.add.text(windowWidth, windowHeight, 'Hello World!', { fontFamily: 'Verdana, "Times New Roman", Tahoma, serif'})
    }

    public update() {

    }
}