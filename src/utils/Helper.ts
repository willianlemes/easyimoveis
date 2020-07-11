import { startOfDay, isAfter } from 'date-fns';

class Helper {
  public static validateBirthDay(dateBirth: Date): boolean {
    return isAfter(startOfDay(new Date()), startOfDay(dateBirth));
  }
}

export default Helper;
