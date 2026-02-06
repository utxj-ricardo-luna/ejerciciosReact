import './Galeria.css'
function Galeria() {
    const images = [
        { id: 1, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWVEtveL7QwVTOoa0fTKWaluXjd-jLJbvyVg&s", alt: "Retro Tech" },
        { id: 2, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbunPYvz5wxK3_j95AMKgRJ7lVcRQcnXf0DQ&s", alt: "Circuit Board" },
        { id: 3, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiJgBxrh5Jbaf-VWLR1duu6WrSyT8n5PQ9EQ&s", alt: "AI Robot" },
        { id: 4, url: "https://www.lanit.eu/wp-content/uploads/2019/11/what-is-data-science.jpg", alt: "Data Science" },
        { id: 5, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ1T_6l4AWEcOYhe_stqtkD6HwmCIC9lnaEQ&s", alt: "Engineering" }
    ];
    return (
        <div className='classGaleria'>
            <h2>Galería de Innovación</h2>
            <figure>
                {images.map((img) => (
                    <div key={img.id} className='classImagen'>
                        <img
                            src={img.url}
                            alt={img.alt}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        />
                    </div>
                ))}
            </figure>
        </div>
    )
}
export default Galeria