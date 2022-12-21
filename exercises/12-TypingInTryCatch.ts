const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
    // e is unknown, tell ts that this e is an error object.
  } catch (e) {
    // Check if e is actually an error
    if (e instanceof Error) {
      return e.message;
      //   Basically narrowing possible outcomes of e being something else and
      // crashing in dev/prod.
    }
  }
};

tryCatchDemo("fail");
