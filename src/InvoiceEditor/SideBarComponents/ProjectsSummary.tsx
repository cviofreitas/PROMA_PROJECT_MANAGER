import React from 'react'

//  helper funcs
import useDisplayDate from '../../HelperFuncs/useDisplayDate';
import useIsOverdue from '../../HelperFuncs/useIsOverdue';
import useGetProjectTotal from '../../HelperFuncs/useGetProjectTotal';

import {Project } from '../../models/project.model'

type ProjectsSummaryProps = {
    project: Project
}
const ProjectsSummary = ({ project }:ProjectsSummaryProps ) => {
    const colors = {
        red: '#FC8C6D',
        yellow: '#F2DC7E',
        green: '#5AC464',
    }
    const date = useDisplayDate(project.dueDate)
    const projectTotal = useGetProjectTotal(project)
    const Balance = projectTotal - project.paid
    const { red, yellow, green } = colors

    let color = yellow

    if (Balance <= 0) {
        color = green
    }

    if (useIsOverdue(project.dueDate) && Balance > 0) {
        color = red
    }

    return (
        <div className='projectSummaries FlexRow FlexCenter'
            id={`${project.invoiceId}`}>
            <div
                className='statusBar'
                style={{
                    minHeight: '60px',
                    width: '3%',
                    marginRight: '10px',
                    height: '45px',
                    backgroundColor: color,
                    borderTopLeftRadius: '5px',
                    borderBottomLeftRadius: '5px',
                }} >
            </div>
            <div className='FlexColumn'
                style={{
                    width: '90%',
                    height: '80%',
                    justifyContent: 'space-between'
                }}>
                <h6>
                    {project.projectName}
                </h6>
                <div className='FlexRow FlexBetween FlexCenter'>
                    <h6>
                        {date}
                    </h6>
                    <h5>
                        #{project.invoiceId}
                    </h5>
                </div>

            </div>

        </div >
    )
}

export default ProjectsSummary