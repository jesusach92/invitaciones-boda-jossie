import { useState } from "react";

function RsvpForm({ data }) {
    const [selectedAdults, setSelectedAdults] = useState([]);
    const [selectedKids, setSelectedKids] = useState([]);
    const [notAttending, setNotAttending] = useState(false);

    const toggleAdult = (name) => {
        setNotAttending(false);

        setSelectedAdults((prev) =>
            prev.includes(name)
                ? prev.filter((a) => a !== name)
                : [...prev, name]
        );
    };

    const toggleKid = (name) => {
        setNotAttending(false);

        setSelectedKids((prev) =>
            prev.includes(name)
                ? prev.filter((k) => k !== name)
                : [...prev, name]
        );
    };

    const handleNotAttending = () => {
        setNotAttending(prev => !prev);
        setSelectedAdults([]);
        setSelectedKids([]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const params = new URLSearchParams({
                code: data.code,
                attended: !notAttending,
                adults: notAttending ? '' : `${selectedAdults.toString()}`,
                kids: notAttending ? '' : selectedKids.toString()
            });

            const url = `https://script.google.com/macros/s/AKfycbzo04l7CPUrcvU2ZrehkFLTr632KXXV3qICVXgQnnMnimHYPugBVzHaox9zxdPTZhFU-w/exec?${params.toString()}`;
            console.log(url);
            await fetch(url, { method: "GET" });


        } catch (err) {
            console.error("Error al enviar:", err);
            alert("Hubo un error al enviar la confirmación.");
        }
    };

    return (
        <form onSubmit={handleSubmit} id="rsvp-form" className="rsvp-container">
            <h2>{data.family}</h2>
            <img src="/assets/Confirmation/attend.png" alt="" className='form-message' />


            {data.adults?.length > 0 && (
                <div className="rsvp-group">
                    {data?.lenguage === 'Spanish' ? <h3>Adultos</h3> : <h3>Adults</h3>}
                    {data.adults.map((adult) => (
                        <label key={adult} className="rsvp-option font-source-serif-light">
                            <input
                                type="checkbox"
                                checked={selectedAdults.includes(adult)}
                                onChange={() => toggleAdult(adult)}
                                className=""
                            />
                            {adult}
                        </label>
                    ))}
                </div>
            )}

            {data.kids?.length > 0 && (
                <div className="rsvp-group">
                    {data?.lenguage === 'Spanish' ? <h3>Niños</h3> : <h3>Kids</h3>}
                    {data.kids.map((kid) => (
                        <label key={kid} className="rsvp-option font-source-serif-light">
                            <input
                                type="checkbox"
                                checked={selectedKids.includes(kid)}
                                onChange={() => toggleKid(kid)}

                            />
                            {kid}
                        </label>
                    ))}
                </div>
            )}

            <div className="">
                <label className="rsvp-option rsvp-not-attending font-source-serif-light">
                    <input
                        type="checkbox"
                        checked={notAttending}
                        onChange={handleNotAttending}
                    />
                    {data?.lenguage === 'Spanish' ? 'No podré asistir' : 'I won\'t be able to attend'}
                </label>
            </div>

            <button type="submit" className="rsvp-submit-button"><img src="/assets/Confirmation/boton.png" alt="" className='form-button' /></button>
        </form>
    );
}

export default RsvpForm;