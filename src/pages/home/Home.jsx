import { useEffect, useState } from 'preact/hooks'
import React from 'react'
import './home.css'
export default function Home() {
    const [data, setData] = useState({
        started: [{
            taskName: "Task 1",
            status: "started",
            date: new Date(),
            id: 1
        }],
        inProgress: [],
        done: []
    });

    const [taskDetail, setTaskDetail] = useState({
        taskName: "",
        status: "",
        date: new Date()
    })
    const addTask = (type) => {
        if (type == "started") {
            var dataCopy = data
            dataCopy.started.push({
                ...taskDetail,
                status: type,
                id: Math.random()
            })
            setData(dataCopy);
        }
        else if (type == "inProgress") {
            var dataCopy = data
            dataCopy.inProgress.push({
                ...taskDetail,
                status: type,
                id: Math.random()
            })
            setData(dataCopy);
        }
        else if (type == "done") {
            var dataCopy = data
            dataCopy.done.push({
                ...taskDetail,
                status: type,
                id: Math.random()
            })
            setData(dataCopy);
        }
    }
    const moveCard = (e) => {
        var endStatus = e.target.className;
        endStatus = endStatus.split(" ")[0];
        const cardId = e.dataTransfer.getData("cardid");
        const sourceStatus = e.dataTransfer.getData("source");
        var dataCopy = {...data}  //deep copy
        var foundedCardIndex = dataCopy[sourceStatus].findIndex((card) => card.id == cardId)
        var newCard = dataCopy[sourceStatus][foundedCardIndex]
        delete dataCopy[sourceStatus][foundedCardIndex]
        dataCopy[endStatus].push(newCard)
        setData(dataCopy)
    }

    return (
        <div className='wrapper'>
            <div className='started container' onDrop={moveCard} onDragOver={(e) => { e.preventDefault() }}>
                {
                    data.started.map((card) => <div draggable onDragStart={(e) => { e.dataTransfer.setData("cardid", card.id); e.dataTransfer.setData("source", "started"); }} id='card'>{card.taskName}</div>)
                }
            </div>
            <div className='inProgress container' onDrop={moveCard} onDragOver={(e) => { e.preventDefault() }}>
                {
                    data.inProgress.map((card) => <div draggable onDragStart={(e) => { e.dataTransfer.setData("cardid", card.id); e.dataTransfer.setData("source", "inProgress"); }} id='card'>{card.taskName}</div>)
                }
            </div>
            <div className='done container' onDrop={moveCard} onDragOver={(e) => { e.preventDefault() }}>
                {
                    data.done.map((card) => <div draggable onDragStart={(e) => { e.dataTransfer.setData("cardid", card.id); e.dataTransfer.setData("source", "done"); }} id='card'>{card.taskName}</div>)
                }
            </div>

        </div>
    )
}
