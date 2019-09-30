import * as Phaser from 'phaser';
import IntroScene from './scenes/scene_intro';

const gameConfig: Phaser.Types.Core.GameConfig = {
    title: 'Carpenter Tycoon',
   
    type: Phaser.AUTO,
   
    width: window.innerWidth,
    height: window.innerHeight,

    scene: IntroScene,
   
    physics: {
      default: 'arcade',
      arcade: {
        debug: true,
      },
    },
   
    parent: 'game',
    backgroundColor: '#000000',
  };
   
  export const game = new Phaser.Game(gameConfig);