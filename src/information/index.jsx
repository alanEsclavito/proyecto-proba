const Index = () => {
    return (
        <div className="flex bg-[#f0f0d8] flex-col items-center p-4">
            <header className="w-full bg-primary text-white py-4 text-center">
                <h1 className="text-3xl font-bold">
                    Obesidad: Peligros, Prevención y Tratamiento
                </h1>
            </header>

            <main className="w-full max-w-4xl mt-8">
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-primary">
                        Peligros de la Obesidad
                    </h2>
                    <p className="mt-4 text-gray-700">
                        La obesidad puede causar una serie de problemas de salud
                        graves, incluyendo enfermedades cardíacas, diabetes tipo
                        2, hipertensión, y ciertos tipos de cáncer. Además,
                        puede afectar la calidad de vida, causando dificultades
                        en la movilidad, problemas respiratorios, y baja
                        autoestima.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-primary">
                        Cómo Prevenir la Obesidad
                    </h2>
                    <ul className="mt-4 text-gray-700 list-disc list-inside">
                        <li>
                            Mantén una dieta equilibrada rica en frutas,
                            verduras, y granos enteros.
                        </li>
                        <li>
                            Realiza ejercicio regularmente, al menos 150 minutos
                            de actividad moderada a la semana.
                        </li>
                        <li>
                            Evita el consumo excesivo de alimentos procesados y
                            azucarados.
                        </li>
                        <li>Controla las porciones y come conscientemente.</li>
                        <li>
                            Monitorea tu peso regularmente para mantener un peso
                            saludable.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-primary">
                        Tratamiento de la Obesidad
                    </h2>
                    <p className="mt-4 text-gray-700">
                        El tratamiento de la obesidad puede incluir cambios en
                        el estilo de vida, como mejorar la dieta y aumentar la
                        actividad física. En algunos casos, puede ser necesario
                        el uso de medicamentos o cirugía para perder peso. Es
                        importante consultar a un profesional de la salud para
                        obtener un plan de tratamiento adecuado.
                    </p>
                </section>
            </main>
        </div>
    );
};

export default Index;
