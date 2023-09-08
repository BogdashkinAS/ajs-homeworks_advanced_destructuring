export default function destructuring(character) {
    const resultArr = [];
    const currentArr = character.special;

    for (let i = 0; i < currentArr.length; i += 1) {
        if (!currentArr[i].description) {
            currentArr[i].description = 'Описание недоступно';
        }
        resultArr.push({
            id: currentArr[i].id,
            name: currentArr[i].name,
            icon: currentArr[i].icon,
            description: currentArr[i].description,
        });
    }

    return resultArr;
}
