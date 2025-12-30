service test {

    entity Hello {
        key id:Int16;
        name:String;

    }

    entity HelloSet as projection on Hello;
}