import './Testimonials.css';

const testimonials = [{
    name: 'Monica Geller',
    desc: "FabCare has been my go-to dry cleaner for years. The quality of their work is always consistent, and their pickup and delivery service makes my life so much easier. I highly recommend them to everyone."
},
{
    name: 'Rachel Green',
    desc: "I recently moved to the area and was in need of a reliable dry cleaner. I was recommended CleanLine by a friend and I couldn't be happier. The staff is courteous, the prices are reasonable, and my clothes always come back looking like new."
},
{
    name: 'Joey Tribbiani',
    desc: "I was blown away by the quality of service I received from CleanClothes. Their attention to detail and commitment to customer satisfaction really sets them apart. I wouldn't trust anyone else with my dry cleaning needs."
}]

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="testimonial-card">
            <p className="testimonial-description">{testimonial.desc}</p>
            <p className="testimonial-name">- {testimonial.name}</p>
        </div>
    );
};

const TestimonialsList = () => {
    return (
        <div className='testimonial' >
            <h3 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '48px', fontWeight: 'bold' }}>Testimonials</h3>
            <div className='testimonial-allcards'>
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                ))}
            </div>
        </div>
    );
};


export default TestimonialsList;