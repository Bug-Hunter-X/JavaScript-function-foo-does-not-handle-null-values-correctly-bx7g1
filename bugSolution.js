function foo(a, b) {
  if (a == null || b == null) {
    return 0; // Now handles null and undefined correctly
  }
  return a + b; 
}