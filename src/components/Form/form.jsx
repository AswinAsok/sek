import React, { useRef, useEffect, useState } from 'react';
import styles from './form.module.css';

export default function Form({handleFormClick}) {
    const formRef = useRef(null);
    const [formVisible, setFormVisible] = useState(true);

    useEffect(() => {
        function handleClickOutside(event) {
            if (formRef.current && !formRef.current.contains(event.target)) {
                setFormVisible(false);
                handleFormClick();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            {formVisible && (
                <div className={styles.form}>
                    <div ref={formRef}>
                        <form action="">
                            <div>
                                <h1>Registration Form</h1>
                                <p>Please fill in the form below to register for the event.</p>
                            </div>

                            <span>
                                <label htmlFor="name">Name*</label>
                                <input type="text" name='name' placeholder='Enter Your Name' />
                            </span>
                            <span>
                                <label htmlFor="email">Email*</label>
                                <input type="text" name='email' placeholder='Enter Your Email' />
                            </span>
                            <span>
                                <label htmlFor="phone">Phone no*</label>
                                <input type="text" name='phone' placeholder='Enter Your Phone no' />
                            </span>
                            <span className={styles.radio}>
                                <label htmlFor="below-18"><input type="radio" name="age" value="below-18" />Below 18</label>
                                <label htmlFor="above-18"> <input type="radio" name="age" value="above-18" />Above 18</label>
                            </span>
                            <button type="submit"><b>Submit</b></button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}
