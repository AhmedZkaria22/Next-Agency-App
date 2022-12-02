
export const Resonsive_Framer_Motion = ( setLg: Function, objLgInitial: Object, objLgAnimate: Object, setSm: Function, objSmInitial: Object, objSmAnimate: Object ) => {
    if( typeof window !== 'undefined' &&  typeof document !== 'undefined' && window.innerWidth > 768 ){
        // console.log('hello');                  
        setLg({...objLgInitial});
        setSm({...objSmAnimate});
    }else if( typeof window !== 'undefined' &&  typeof document !== 'undefined' && window.innerWidth <= 768 ){        
        setLg({...objLgAnimate});
        setSm({...objSmInitial});
    }

    if( typeof window !== 'undefined' ){
        window.onresize = () => {
            if( window.innerWidth > 768 ){                  
                setLg({...objLgInitial});
                setSm({...objSmAnimate});
            }else{                
                setLg({...objLgAnimate});
                setSm({...objSmInitial});
            }
        }
    }
}