function foo(a, b) {
  if (a === null || b === null) {
    return 0; // This is where the bug happens. Should use loose comparison
  }
  return a + b; 
}