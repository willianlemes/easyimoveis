declare namespace Faker {
  interface FakerStatic {
    /**
     * Customized data generators
     */
    custom: {
      /**
       * Creates an unique email according to the data passed to it.
       * @param firstName The firstName to be considered
       * @param lastName The lastName to be considered
       */
      uniqueEmail(firstName: string, lastName: string): string;
    };
  }
}
