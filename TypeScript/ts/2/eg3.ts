function some_eg3(a:string, b:number)
{
	// some code
}
function eg3()
{
	some_eg3("Great", 10);
	some_eg3(20,40); // incorrect Argument
	some_eg3("Good", false); // incorrect argument
	some_eg3("Good"); // incorrect argument

}
eg3();

/*

eg3.ts:8:11 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.

8  some_eg3(20,40); // incorrect Argument
            ~~

eg3.ts:9:19 - error TS2345: Argument of type 'boolean' is not assignable to parameter of type 'number'.

9  some_eg3("Good", false); // incorrect argument
                    ~~~~~

eg3.ts:10:2 - error TS2554: Expected 2 arguments, but got 1.

10  some_eg3("Good"); // incorrect argument
    ~~~~~~~~

  eg3.ts:1:29
    1 function some_eg3(a:string, b:number)
                                  ~~~~~~~~
    An argument for 'b' was not provided.


Found 3 errors in the same file, starting at: eg3.ts:8

*/