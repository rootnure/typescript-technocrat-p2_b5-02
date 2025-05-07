{
  // Constraints in Typescript
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string; } // these properties must be present
  >(student: T) => {
    const course = "Web Development";
    return { ...student, course }
  }

  const student1 = addCourseToStudent({
    id: 123,
    name: "Mr. X",
    email: "mr.x@mail.com",
    devType: "NLWD"
  });
  const student2 = addCourseToStudent({
    id: 97,
    name: "Mr. X",
    email: "mr.x@mail.com",
    hasWatch: true
  });

  console.log({ student1, student2 });

}