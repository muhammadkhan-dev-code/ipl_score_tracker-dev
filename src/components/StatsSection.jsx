"use client ";
import { motion } from "framer-motion";
import { Users, Trophy, Calendar, TrendingUp } from "lucide-react";

export default function StatsSection() {      
    const stats=[
 {icon: Users,title:"Total Matches",value:"74"},
 {icon: Trophy,title:"Team",value:"10"},
 {icon: Calendar,title:"Turnament Duration",value:"51 days"},
 {icon: TrendingUp,title:"Highest Score",value:"246/7"},
    ];

    return (
        <div className="py-16 gradient-to-r from-blue-600 to-red-600 text-white ">
            <div className="container mx-auto px-4  ">
                <motion.h2 
                className="text-3xl text-center font-bold mb-12    "
                initial={{opacity:0}}
                animate={{opacity:1}} 
                transition={{duration:0.5}}  >
                    IPL 2025 Stats and Highlights   
                </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 " >
               {
                stats.map((items,index)=>{
                    const Icon = items.icon;
                    return (
                <motion.div
                
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg  p-6  text-center  hover:shadow-lg hover:shadow-amber-500  "
                initial={{opacity:0 , y:20}}
                animate={{opacity:1, y:20}} 
                transition={{ delay :index* 0.1,duration:0.5}}
                whileHover={{y:-5, transition :{duration:0.2} }}
                >
                    <div className="flex justify-center mb-4 "> 
                        <Icon className="h-10 w-10"/>
                    </div>
                    <h3 className="text-xl font-medium mb-2"> {items.title}</h3>
                    <p className="text-xl font-bold  mb-2"> {items.value}</p>
                
                </motion.div>
                )}
    
                )
               }
            </div>
            </div>
        </div>
    )
}