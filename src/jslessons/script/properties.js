var myobject = {
    // An ordinary data property
    x: 0,
    // An accessor property defined as a pair of functions
    get data () { return this.x; },
    set data (value) { this.x = value; }
  };
  