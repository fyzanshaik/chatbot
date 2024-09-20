// useChatLogic.jsx
import { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { jsPDF } from 'jspdf';

const useChatLogic = () => {
    const [messages, setMessages] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const [userInfo, setUserInfo] = useState({
        language: '',
        name: '',
        phone: '',
        tickets: { adult: 0, kids: 0 },
    });
    const initialMessageSent = useRef(false);
    const predefinedOTP = '58726';

    // const indianLanguages = ['hindi', 'tamil', 'telugu', 'bengali', 'marathi', 'english'];
    const indianLanguages = useMemo(() => {
        return ['hindi', 'tamil', 'telugu', 'bengali', 'marathi', 'english'];
    }, [])
    const addMessage = useCallback((content, sender = 'bot') => {
        setMessages((prevMessages) => [...prevMessages, { content, sender }]);
    }, []);

    const handleUserInput = useCallback(
        (input) => {
            const lowerInput = input.toLowerCase().trim();
            switch (currentStep) {
                case 1:
                    if (indianLanguages.includes(lowerInput)) {
                        setUserInfo((prev) => ({ ...prev, language: lowerInput }));
                        addMessage(`Fantastic choice! You've selected ${input}. May I have your name, please?`);
                        setCurrentStep((prevStep) => prevStep + 1);
                    } else {
                        addMessage(
                            `I'm sorry, I didn't recognize that language. Please choose from: ${indianLanguages
                                .map((lang) => lang.charAt(0).toUpperCase() + lang.slice(1))
                                .join(', ')}.`
                        );
                    }
                    break;
                case 2: // Name input
                    setUserInfo((prev) => ({ ...prev, name: input }));
                    addMessage(`Pleasure to meet you, ${input}! Could you provide your phone number?`);
                    setCurrentStep((prevStep) => prevStep + 1);
                    break;
                case 3: // Phone number input
                    setUserInfo((prev) => ({ ...prev, phone: input }));
                    addMessage('An OTP has been sent to your number. Please enter it to proceed.');
                    setCurrentStep((prevStep) => prevStep + 1);
                    break;
                case 4: // OTP verification
                    if (input === predefinedOTP) {
                        addMessage('OTP verified successfully!');
                        addMessage(
                            'How many tickets would you like to book? Please specify adult and child tickets (e.g., "2 adults, 1 child").'
                        );
                        setCurrentStep((prevStep) => prevStep + 1);
                    } else {
                        addMessage('That OTP seems incorrect. Please try again.');
                    }
                    break;
                case 5: // Ticket selection
                    {
                        const adultMatch = lowerInput.match(/(\d+)\s*adult/i);
                        const childMatch = lowerInput.match(/(\d+)\s*child/i);
                        const adult = adultMatch ? parseInt(adultMatch[1]) : 0;
                        const kids = childMatch ? parseInt(childMatch[1]) : 0;

                        if (adult > 0 || kids > 0) {
                            setUserInfo((prev) => ({ ...prev, tickets: { adult, kids } }));
                            addMessage(
                                `Great! You've selected ${adult} adult(s) and ${kids} child(ren). We have an exclusive 10% discount for group bookings!`
                            );
                            addMessage('Shall we proceed to payment? (Yes/No)');
                            setCurrentStep((prevStep) => prevStep + 1);
                        } else {
                            addMessage(
                                'I couldn’t understand the ticket quantities. Please specify like "2 adults, 1 child".'
                            );
                        }
                        break;
                    }
                case 6: // Payment confirmation
                    if (lowerInput === 'yes') {
                        addMessage('Wonderful! Generating your payment QR code...');
                        addMessage(<QRCodeSVG value="https://example.com/payment" />);
                        addMessage('Please scan the QR code to complete your payment.');
                        setTimeout(() => {
                            addMessage('Payment confirmed! Preparing your tickets...');
                            setTimeout(() => {
                                const bookingNumber = `BOOK-${Math.random()
                                    .toString(36)
                                    .substr(2, 9)
                                    .toUpperCase()}`;

                                const doc = new jsPDF();
                                doc.text('Your Ticket', 10, 10);
                                doc.text(`Booking Number: ${bookingNumber}`, 10, 20);
                                doc.text(`Name: ${userInfo.name}`, 10, 30);
                                doc.text(`Phone: ${userInfo.phone}`, 10, 40);
                                doc.text(
                                    `Tickets: ${userInfo.tickets.adult} Adult(s), ${userInfo.tickets.kids} Child(ren)`,
                                    10,
                                    50
                                );

                                const pdfBlob = doc.output('blob');
                                const pdfUrl = URL.createObjectURL(pdfBlob);

                                const downloadLink = (
                                    <div>
                                        <p>Your tickets are ready!</p>
                                        <a href={pdfUrl} download={`tickets-${bookingNumber}.pdf`}>
                                            <button
                                                style={{
                                                    backgroundColor: '#BB86FC',
                                                    color: '#000',
                                                    padding: '10px 20px',
                                                    border: 'none',
                                                    borderRadius: '5px',
                                                    cursor: 'pointer',
                                                    marginTop: '10px',
                                                }}
                                            >
                                                Download Tickets
                                            </button>
                                        </a>
                                    </div>
                                );

                                addMessage(downloadLink);
                                addMessage(`Keep this booking number handy: ${bookingNumber}`);
                                setCurrentStep((prevStep) => prevStep + 1);
                            }, 3000);
                        }, 5000);
                    } else {
                        addMessage('No worries! Feel free to ask if you need anything else.');
                        setCurrentStep((prevStep) => prevStep + 1);
                    }
                    break;
                case 7:
                    addMessage('Is there anything else I can assist you with today?');
                    break;
                default:
                    addMessage('Thank you for visiting our museum! Have a wonderful day!');
            }
        },
        [currentStep, addMessage, userInfo, indianLanguages]
    );

    const sendMessage = useCallback(
        (e) => {
            e.preventDefault();
            const userInput = e.target.elements[0].value;
            e.target.reset();

            addMessage(userInput, 'user');
            setIsTyping(true);

            setTimeout(() => {
                handleUserInput(userInput);
                setIsTyping(false);
            }, 1000);
        },
        [addMessage, handleUserInput]
    );

    useEffect(() => {
        if (!initialMessageSent.current) {
            addMessage(
                `Hello! Welcome to our Virtual Museum assistant. Please select your preferred language: ${indianLanguages
                    .map((lang) => lang.charAt(0).toUpperCase() + lang.slice(1))
                    .join(', ')}.`
            );
            setCurrentStep((prevStep) => prevStep + 1);
            initialMessageSent.current = true;
        }
    }, [addMessage, indianLanguages]);

    return { messages, sendMessage, isTyping };
};

export default useChatLogic;
