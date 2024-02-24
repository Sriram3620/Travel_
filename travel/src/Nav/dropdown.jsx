function DropDown(props)
{
    let check3=props.check3;
    let check4=props.check4;
    console.log(check3);
    return(
        <div className="drop-con">
            <hr/>
            <h1 onClick={""} className="drop-head">{props.sub1}</h1>
            <hr/>
            <h1 className="drop-head">{props.sub2}</h1>
            <hr/>
            {check3 &&  <h1 className="drop-head">{props.sub3}</h1>}
            {check3 &&  <hr/>}
            {check4 &&  <h1 className="drop-head">{props.sub4}</h1>}
            {check4 &&  <hr/>}
        </div>
    )
}
export default DropDown;