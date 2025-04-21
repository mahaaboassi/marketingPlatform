
import Style from "./page.module.css"

const Card = ({currentMonth})=>{


    const constant = [{
        row : 1,
        name : "month",
        content : ["Jun", "1", "status"]
    },{
        row : 2,
        name : "days",
        content : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },{
        row : 3,
        name : "number-days",
        content : []
    }]

    constant[0].content = [currentMonth.name,currentMonth.number,"bla"]
    if(currentMonth.startsOn.toLowerCase() == "monday") constant[2].content.push(1)
    if(currentMonth.startsOn.toLowerCase() == "tuesday") constant[2].content.push(0,1)
    if(currentMonth.startsOn.toLowerCase() == "wednesday") constant[2].content.push(0,0,1)
    if(currentMonth.startsOn.toLowerCase() == "thursday") constant[2].content.push(0,0,0,1)
    if(currentMonth.startsOn.toLowerCase() == "friday") constant[2].content.push(0,0,0,0,1)
    if(currentMonth.startsOn.toLowerCase() == "saturday") constant[2].content.push(0,0,0,0,0,1)
    if(currentMonth.startsOn.toLowerCase() == "sunday") constant[2].content.push(0,0,0,0,0,0,1)
    for(let index = 1; index <= currentMonth.days.length-1; index++){
        constant[2].content.push(index+1)
    }

    
    return(<div className={`${Style.ContainerCard} p-2 cursor-pointer`}>
        <div className={`${Style.header} flex justify-between items-center`}>
            <div className={`flex gap-2 items-center`}>
                <span>{constant[0].content[1]}</span>
                <h4>{constant[0].content[0]}</h4>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10.1173L4.42969 10.0599C6.14062 11.0261 7.67188 12.2774 8.99023 13.8597C12.4004 8.32079 16.3184 3.78253 20.625 0H24C17.9785 6.55293 13.0645 13.5689 9.13477 21C7.0332 16.5861 4.09375 12.8705 0 10.1173Z" fill="#01A601"/>
                </svg>
            </div>
        </div>
        <div className={`${Style.days} gap-1 pt-2 flex `}>
            {constant[1].content.map((e,i)=><div className={`flex justify-center items-center min-w-10`} key={`Days_${e}_${i}`}>{e}</div>)}
        </div>
        {
            Array.from({ length: Math.ceil(constant[2].content.length / 7) }).map((_, rowIndex) => {
                const week = constant[2].content.slice(rowIndex * 7, rowIndex * 7 + 7);

                return (
                <div className="flex gap-1 py-0.5 " key={`Row_${rowIndex}`}>
                    {week.map((day, i) => (
                    <h5 className={`flex justify-center items-center  min-w-10 ${Style.value}`} key={`Column_${i}`}>
                        {day === 0 ? "" : day}
                    </h5>
                    ))}
                </div>
                );
            })
            }
        <div>

        </div>
    </div>)

}
export default Card