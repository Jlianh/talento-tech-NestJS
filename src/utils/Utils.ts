export class Utils {
  generateCode() {
    let characters = '';
    let numbers = '';
    const numbersList = '1234567890';
    const charactersList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * numbersList.length);
      characters += numbersList.charAt(randomIndex);
    }

    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * charactersList.length);
      numbers += charactersList.charAt(randomIndex);
    }

    return numbers + characters;
  }
}
