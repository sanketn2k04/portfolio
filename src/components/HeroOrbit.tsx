import { PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({ children, size, rotation, shouldOrbit = false, shouldSpin = false, spinDuration, OrbitDuration }: PropsWithChildren<{ size: number; rotation: number; shouldOrbit?: boolean; shouldSpin?: boolean; spinDuration?: string; OrbitDuration?: string }>) => {
    // console.log(size)
    return (

        <div className="absolute left top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
            <div className={twMerge(shouldOrbit === true && "animate-spin")} style={{
                animationDuration: OrbitDuration,
            }}>
                <div className="flex items-start justify-start " style={{
                    transform: `rotate(${rotation}deg)`,
                    height: `${size}px`,
                    width: `${size}px`,
                }}>
                    <div className={twMerge(shouldSpin==true && "animate-spin")} style={{
                        animationDuration:spinDuration,
                    }}>
                        <div className="inline-flex" style={{
                            transform: `rotate(${rotation * -1}deg)`,
                        }}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}