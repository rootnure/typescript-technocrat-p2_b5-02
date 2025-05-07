{
  // Custom Promise

  type ToDo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  }

  const getToDo = async (id: number): Promise<ToDo> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = await res.json();
    return data;
  }

  getToDo(10);

  type TData = { msg: string; };

  const createPromise = (): Promise<TData> => {
    return new Promise<TData>((resolve, reject) => {
      const data: boolean = true;
      if (!data) {
        resolve({ msg: "promise resolve hoichey vai" });
      } else {
        reject("Data Dite Hari No...");
      }
    })
  }

  // calling custom promise
  const showData = async (): Promise<TData> => {
    const data: TData = await createPromise();
    return data;
  }
  console.log(showData());
}