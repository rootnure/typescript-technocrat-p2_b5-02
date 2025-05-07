{
  // Function with Generic

  const createArray = (param: string): string[] => {
    return [param];
  }
  const res1 = createArray('Bangladesh');

  const createArrayWithGeneric = <T>(param: T): [T] => {
    return [param];
  }
  const resGen = createArrayWithGeneric<boolean>(true);
  interface IUser { id: number; name: string }
  const resGenObj = createArrayWithGeneric<IUser>({ id: 54, name: 'Mr. Y' });

  const createTupleWithGeneric = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  }
  const resGenTuple = createTupleWithGeneric<string, IUser>("User1", { id: 834, name: "Mr. Y" });

  const addCourseToStudent = <T>(student: T) => {
    const course = "Web Development";

    return {
      ...student,
      course
    }
  }

  const student1 = addCourseToStudent<{ name: string; email: string; devType: string }>({ name: "Mr. X", email: "mr.x@mail.com", devType: "NLWD" });
  const student2 = addCourseToStudent<{ name: string; email: string; hasWatch: boolean }>({ name: "Mr. X", email: "mr.x@mail.com", hasWatch: true });

}