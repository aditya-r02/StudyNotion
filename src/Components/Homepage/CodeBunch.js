import React from "react";
import YellowBtn from "./YellowBtn";
import BlackBtn from "./BlackBtn";

export default function CodeBunch({heading, para, btn1, btn2, link1, link2, isFirst}){
    const map = [1,2,3,4,5,6,7,8,9,10, 11];
    const property = isFirst?'flex-row':'flex-row-reverse';
    const colorCombo = isFirst?'ellipse1':'ellipse2';

    return (
        <div className={`flex py-[5.625rem] px-[7.5rem] items-center justify-center gap-[6.125rem]
            w-full h-full ${property}`}>

                {/*1st box*/}
                <div className="flex flex-col gap-[0.75rem] w-[30.375rem]">
                    <h3 className="text-4xl font-semibold">
                       {heading}
                    </h3>

                    <p className="text-richblack-300 text-[1rem]">
                        {para}
                    </p>

                    <div className="flex gap-[1.5rem] w-full pt-[3.25rem]">

                        <YellowBtn ptr={link1} text={btn1}/>

                        <BlackBtn ptr={link2} text={btn2}/>

                    </div>


                </div>

                {/*2nd box*/}
                <div className="w-[33.375rem] h-[17.375rem] p-2 flex gap-[0.5rem] leading-snug font-mono font-bold
                self-stretch relative">
                
                    {/*Numbers */}
                    <div className="flex flex-col items-center px-[0.25rem] gap-[0.125rem]">
                        {
                            map.map((val, index)=>{
                                return (<span key={index} className="text-richblack-400">{val}</span>)
                            })
                        }
                    </div>

                    {/*Codes */}
                    <div className="flex flex-col text-richblack-50 gap-[0.125rem]">
                        <span className="text-brown-100">{'<!DOCTYPE html>'}</span>
                        <span>{'<html>'}</span>
                        <span>{'head><title>Example</'}</span>
                        <span>
                            <span>{'title><link'}</span>
                            <span className="text-pink-100">{'rel='}</span>
                            <span className="text-pink-300">{'"stylesheet"'}</span>
                            <span className="text-pink-100">{'href='}</span>
                            <span className="text-pink-300">{'"styles.css"'}</span>
                            <span>{'>'}</span>
                        </span>
                        <span>{'/head>'}</span>
                        <span>{'body>'}</span>
                        <span>
                            <span>{'h1><a'}</span>
                            <span className="text-pink-100">{'href='}</span>
                            <span className="text-pink-300">{'"/">Header'}</span>
                            <span>{'</a>'}</span>
                        </span>
                        <span>{'/h1>'}</span>
                        <span>
                            <span>{'nav><a'}</span>
                            <span className="text-pink-100">{'href='}</span>
                            <span className="text-pink-300">{'"one/">One'}</span>
                            <span>{'</a><a'}</span>
                            <span className="text-pink-100">{'href='}</span>
                            <span className="text-pink-300">{'"two/">Two'}</span>
                            <span>{'</'}</span>
                        </span>
                        <span>
                            <span>{'a><a'}</span>
                            <span className="text-pink-100">{'href='}</span>
                            <span className="text-pink-300">{'"three/">Three'}</span>
                            <span>{'</a>'}</span>
                        </span>
                        <span>{'/nav>'}</span>
                    </div>

                    {/*Ellipse background*/}
                    <div className={`ellipse ${colorCombo}`}></div>
                </div>

            </div>
    )
}