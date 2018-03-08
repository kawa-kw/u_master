import { dimensions, colors } from './variables';

export default function generateRandomColor() {
    const $body = $('body');
    const bcgColorsList = [];

    for (colors.colorName in colors){
        bcgColorsList.push(colors[colors.colorName]);
    };

    var randomIndxList = [];

    // Get random color
    for (var i = 0; i < 3; i++) {
        const randomColorIdx = Math.floor(Math.random() * bcgColorsList.length);
        randomIndxList.push(randomColorIdx);
    }

    $('.part-1-color').attr('fill', bcgColorsList[randomIndxList[0]]);
    $('.part-2-color').attr('fill', bcgColorsList[randomIndxList[1]]);
    $('.part-3-color').attr('fill', bcgColorsList[randomIndxList[2]]);

    $body.css( 'background-image', `linear-gradient(15deg, ${bcgColorsList[randomIndxList[0]]} 0, #f2f2f2 20%, #f2f2f2 85%, ${bcgColorsList[randomIndxList[0]]} 100%)` )
};
