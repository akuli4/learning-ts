const guitarists = new Set<string>();

guitarists.add("Jimi Hendrix");
guitarists.add("Eric Clapton");

// This now throws an error
// guitarists.add(2);

// This set is supposed to only consist of strings
// How would you achieve this?
