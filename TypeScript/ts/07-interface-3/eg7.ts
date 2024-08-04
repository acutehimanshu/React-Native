interface keyValue{
    [x:number]:string;
};
function eg7(){
    let k:keyValue;
    k = {
        0:"Good",
        -5:"Not"
    }
    k[-10] = 'Cool';
    k[-30] ="Great";
    console.log(k);
    
}
eg7();

/**
Error
Property assignment expected.

8         -5:"Not"
          ~

eg7.ts:8:11 - error TS1005: ';' expected.

8         -5:"Not"
            ~

eg7.ts:14:1 - error TS1128: Declaration or statement expected.

14 }
 */

