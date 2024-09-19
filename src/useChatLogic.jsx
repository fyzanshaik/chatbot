import { useState, useCallback, useEffect, useRef } from 'react';
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

    const addMessage = useCallback((content, sender = 'bot') => {
        setMessages((prevMessages) => [...prevMessages, { content, sender }]);
    }, []);

    const handleUserInput = useCallback(
        (input) => {
            console.log('input:', input);
            console.log('currentStep:', currentStep);
            switch (currentStep) {
                case 1: // Language selection
                    if (['english', 'spanish', 'french'].includes(input.toLowerCase())) {
                        setUserInfo((prev) => ({ ...prev, language: input.toLowerCase() }));
                        addMessage(`Great! You've selected ${input}. What's your name?`);
                        setCurrentStep((prevStep) => prevStep + 1);
                    } else {
                        addMessage(
                            "I'm sorry, I didn't recognize that language. Please choose English, Spanish, or French."
                        );
                    }
                    break;
                case 2: // Name input
                    setUserInfo((prev) => ({ ...prev, name: input }));
                    addMessage(`Nice to meet you, ${input}! Please enter your phone number.`);
                    setCurrentStep((prevStep) => prevStep + 1);
                    break;
                case 3: // Phone number input
                    setUserInfo((prev) => ({ ...prev, phone: input }));
                    addMessage('We have sent an OTP to your number. Please enter it to proceed.');
                    setCurrentStep((prevStep) => prevStep + 1);
                    break;
                case 4: // OTP verification
                    if (input === predefinedOTP) {
                        addMessage('OTP verified successfully!');
                        addMessage(
                            "How many tickets do you need? Please specify adult and kids tickets (e.g., '2 adult, 1 kid')."
                        );
                        setCurrentStep((prevStep) => prevStep + 1);
                    } else {
                        addMessage('Incorrect OTP. Please try again.');
                    }
                    break;
                case 5: // Ticket selection
                    const adultMatch = input.match(/(\d+)\s*adult/i);
                    const kidsMatch = input.match(/(\d+)\s*kid/i);
                    const adult = adultMatch ? parseInt(adultMatch[1]) : 0;
                    const kids = kidsMatch ? parseInt(kidsMatch[1]) : 0;

                    if (adult > 0 || kids > 0) {
                        setUserInfo((prev) => ({ ...prev, tickets: { adult, kids } }));
                        addMessage(
                            `Great! You've selected ${adult} adult and ${kids} kids tickets. We have a special offer: 10% off for group bookings!`
                        );
                        addMessage('Ready to proceed with payment? (Yes/No)');
                        // Corrected line: Increment currentStep
                        setCurrentStep((prevStep) => prevStep + 1);
                    } else {
                        addMessage(
                            "I'm sorry, I couldn't understand the ticket numbers. Please try again in the format '2 adult, 1 kid'."
                        );
                    }
                    break;
                case 6: // Payment confirmation
                    if (input.toLowerCase() === 'yes') {
                        addMessage("Great! Here's your payment QR code:");
                        addMessage(<QRCodeSVG value="https://example.com/payment" />);
                        addMessage('Please scan this QR code to complete your payment.');
                        setTimeout(() => {
                            addMessage('Payment successful! Generating your tickets...');
                            setTimeout(() => {
                                // Generate a unique booking number
                                const bookingNumber = `BOOK-${Math.random()
                                    .toString(36)
                                    .substr(2, 9)
                                    .toUpperCase()}`;

                                // Generate the PDF document
                                const doc = new jsPDF();
                                doc.text('Your Ticket', 10, 10);
                                doc.text(`Booking Number: ${bookingNumber}`, 10, 20);
                                doc.text(`Name: ${userInfo.name}`, 10, 30);
                                doc.text(`Phone: ${userInfo.phone}`, 10, 40);
                                doc.text(
                                    `Tickets: ${userInfo.tickets.adult} Adult, ${userInfo.tickets.kids} Kids`,
                                    10,
                                    50
                                );
                                // Optionally add more content to the PDF here

                                // Generate PDF as Blob
                                const pdfBlob = doc.output('blob');

                                // Create a Blob URL for the PDF
                                const pdfUrl = URL.createObjectURL(pdfBlob);

                                // Create a download link message
                                const downloadLink = (
                                    <div>
                                        <p>Here are your tickets:</p>
                                        <a href={pdfUrl} download={`tickets-${bookingNumber}.pdf`}>
                                            <button className="bg-blue-500 text-white p-2 rounded mt-2">
                                                Download PDF
                                            </button>
                                        </a>
                                    </div>
                                );

                                // Send the download link as a message
                                addMessage(downloadLink);

                                // Additional messages
                                addMessage(
                                    'You can also access your tickets online at: https://example.com/tickets'
                                );
                                addMessage(`Here's your booking number: ${bookingNumber}`);
                                // Corrected line: Increment currentStep
                                setCurrentStep((prevStep) => prevStep + 1);
                            }, 3000);
                        }, 5000);
                    } else {
                        addMessage(
                            "No problem. Let me know if you have any questions or when you're ready to book."
                        );
                        // Corrected line: Increment currentStep
                        setCurrentStep((prevStep) => prevStep + 1);
                    }
                    break;
                case 7:
                    addMessage('Is there anything else I can help you with?');
                    break;
                default:
                    addMessage('Is there anything else I can help you with?');
            }
        },
        [currentStep, addMessage, userInfo]
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
                'Welcome to our Museum Chatbot! Please select your preferred language: English, Spanish, or French.'
            );
            setCurrentStep((prevStep) => prevStep + 1);
            initialMessageSent.current = true;
        }
    }, [addMessage]);

    return { messages, sendMessage, isTyping };
};

export default useChatLogic;
