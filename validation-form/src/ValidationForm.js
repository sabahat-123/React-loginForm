import './App.css';






function ValidationForm(){
    return(
        <>
        <div className="container">
            <form action="" className='form'>
                <h2>Validation Form</h2>
                <div className="row">
                    <div className="col-25">
                    <label for="fullname">Full Name</label>
                    </div>
                    <div className="col-75">
                    <input
                    type='text'
                    placeholder='Enter your name'
                    name='fullname'
                    />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="email">Email</label>
                    </div>
                    <div className="col-75">
                        <input
                        type="email"
                        placeholder='Enter your email'
                        name='email'
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="number">Phone</label>
                    </div>
                    <div className="col-75">
                        <input
                        type="number"
                        placeholder='Enter your phone'
                        name='phone'
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="password">Password</label>
                    </div>
                    <div className="col-75">
                        <input
                        type="password"
                        placeholder='Enter your password'
                        name='password'
                        />
                    </div>
                </div>
                <div class="row">
                <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
        </>
    )

}
export default ValidationForm;