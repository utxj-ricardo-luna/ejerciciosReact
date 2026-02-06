import './AcercaDe.css'
function AcercaDe() {
    return (
        <div>
            <h1>Sobre NovaTech Solutions</h1>

            <p>
                Fundada en 2024, <strong>NovaTech Solutions</strong> nació con la visión de democratizar el acceso a la inteligencia artificial avanzada. Somos un equipo apasionado de ingenieros y creativos dedicados a simplificar procesos digitales complejos para empresas de todos los tamaños.
            </p>

            <div className="valores-corporativos">
                <article>
                    <h2>Nuestra Misión</h2>
                    <p>Impulsar la innovación global mediante el desarrollo de software ético, eficiente y centrado en el usuario.</p>
                </article>

                <article>
                    <h2>Nuestra Visión</h2>
                    <p>Convertirnos en el referente líder de soluciones de IA en América Latina para el año 2030.</p>
                </article>
            </div>

            <h3>¿Por qué elegirnos?</h3>
            <ul>
                <li><strong>Innovación Constante:</strong> Implementamos las últimas tendencias en modelos de lenguaje.</li>
                <li><strong>Seguridad de Datos:</strong> Priorizamos la privacidad y el cifrado de extremo a extremo.</li>
                <li><strong>Soporte Humano:</strong> Creemos en la tecnología asistida, no reemplazada, por personas.</li>
            </ul>
            <p>¿Quieres conocer más sobre nuestro impacto? <a href="/contacto">Contáctanos hoy mismo</a>.</p>
        </div>
    )
}
export default AcercaDe