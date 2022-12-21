const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
    // e is unknown, tell ts that this e is an error object.
    // @ts-expect-error
  } catch (e) {
    return e.message;
  }
};

tryCatchDemo("fail");
