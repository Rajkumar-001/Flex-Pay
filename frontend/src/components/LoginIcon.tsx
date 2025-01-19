


interface LoginProps {
    label: string;
    onClick?: () => void; 
  }
  



export default function Login(props:LoginProps) {

    return (

        <div>

            <div style={{

                height:40,
                width:90,
                border: '1px solid Blue',
                borderRadius: 50,
                display: 'flex',
                padding:10,
                backgroundColor: 'lightblue',
                cursor: 'pointer',
                



            }}
            onClick={props.onClick}
            >

                <h4 style={{

                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'blue',
                    margin: 'auto',
                    fontWeight:500,

                }}>{props.label}</h4>


            </div>


        </div>


    )






}




