{
    const handleError = (message: string): never => {
        throw new Error(message);
    }

    handleError("Hello Error!!!")
}