import { useState } from "react";

function Index() {
    const [isLoadingResult, setIsLoadingResult] = useState(false);
    const [result, setResult] = useState("");
    const [formValues, setFormValues] = useState({
        age: "",
        sex: "masculino",
        height: "",
        weight: "",
        major: "",
        frequencyJunk: "0",
        frequencySoda: "0",
        haveHealthyHabits: false,
        haveFoodIssues: false,
        haveIrregularSchedule: false,
        haveAccessToHealthy: false,
        amountExercise: "0",
        amountSit: "0",
        amountSmoking: "0",
        amountDrinking: "0",
        amountSleep: "0",
        haveSleepIssues: false,
        haveAnxiety: false,
        havePrecedentsObesity: false,
        havePrecedentsIllness: false,
        isSedentary: false,
        takesMedicine: false,
        haveHealthIssues: false,
        haveMentalIssues: false,
        haveDepression: false,
    });
    const [questionIndex, setQuestionIndex] = useState(0);
    const categories = [
        "Datos personales",
        "Hábitos alimenticios",
        "Actividad física y estilo de vida",
        "Salud y bienestar general",
    ];
    const results = [
        {
            title: "BAJO",
            advice: "!Felicidades! Continua con tus hábitos",
            classColor: "text-success",
            svg: (
                <svg
                    key={0}
                    xmlns="http://www.w3.org/2000/svg"
                    height="48px"
                    viewBox="0 -960 960 960"
                    width="48px"
                    fill="#75FB4C"
                >
                    <path d="m421-298 283-283-46-45-237 237-120-120-45 45 165 166Zm59 218q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z" />
                </svg>
            ),
        },
        {
            title: "MODERADO",
            advice: "Revisa tus habitos alimenticios y deportivos",
            classColor: "text-warning",
            svg: (
                <svg
                    key={1}
                    xmlns="http://www.w3.org/2000/svg"
                    height="48px"
                    viewBox="0 -960 960 960"
                    width="48px"
                    fill="#F19E39"
                >
                    <path d="m40-120 440-760 440 760H40Zm104-60h672L480-760 144-180Zm340.18-57q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5ZM454-348h60v-224h-60v224Zm26-122Z" />
                </svg>
            ),
        },
        {
            title: "ALTO",
            classColor: "text-error",
            advice: "Consulte a un médico profesional",
            svg: (
                <svg
                    key={2}
                    xmlns="http://www.w3.org/2000/svg"
                    height="48px"
                    viewBox="0 -960 960 960"
                    width="48px"
                    fill="#EA3323"
                >
                    <path d="M479.98-280q14.02 0 23.52-9.48t9.5-23.5q0-14.02-9.48-23.52t-23.5-9.5q-14.02 0-23.52 9.48t-9.5 23.5q0 14.02 9.48 23.52t23.5 9.5ZM453-433h60v-253h-60v253Zm27.27 353q-82.74 0-155.5-31.5Q252-143 197.5-197.5t-86-127.34Q80-397.68 80-480.5t31.5-155.66Q143-709 197.5-763t127.34-85.5Q397.68-880 480.5-880t155.66 31.5Q709-817 763-763t85.5 127Q880-563 880-480.27q0 82.74-31.5 155.5Q817-252 763-197.68q-54 54.31-127 86Q563-80 480.27-80Zm.23-60Q622-140 721-239.5t99-241Q820-622 721.19-721T480-820q-141 0-240.5 98.81T140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z" />
                </svg>
            ),
        },
    ];
    const questions = [
        {
            pregunta: "¿Cuál es tu edad?",
            numCategoria: 0,
            element: (
                <div key={1}>
                    <input
                        value={formValues.age}
                        onChange={(e) => {
                            setFormValues({
                                ...formValues,
                                age: e.target.value,
                            });
                        }}
                        type="number"
                        placeholder="Escribe tu respuesta"
                        className="input input-bordered input-primary w-full max-w-xs"
                    />
                </div>
            ),
        },
        {
            pregunta: "¿Cuál es tu sexo?",
            numCategoria: 0,
            element: (
                <div key={2}>
                    <select
                        value={formValues.sex}
                        onChange={(e) =>
                            setFormValues({
                                ...formValues,
                                sex: e.target.value,
                            })
                        }
                        className="select select-primary w-full max-w-xs"
                    >
                        <option value={"masculino"}>Masculino</option>
                        <option value={"femenino"}>Femenino</option>
                    </select>
                </div>
            ),
        },
        {
            pregunta: "¿Cuál es tu estatura (en cm)?",
            numCategoria: 0,
            element: (
                <div key={3}>
                    <input
                        value={formValues.height}
                        onChange={(e) => {
                            setFormValues({
                                ...formValues,
                                height: e.target.value,
                            });
                        }}
                        type="number"
                        placeholder="Escribe tu respuesta"
                        className="input input-bordered input-primary w-full max-w-xs"
                    />
                </div>
            ),
        },
        {
            pregunta: "¿Cuál es tu peso (en kg)?",
            numCategoria: 0,
            element: (
                <div key={4}>
                    <input
                        value={formValues.weight}
                        onChange={(e) => {
                            setFormValues({
                                ...formValues,
                                weight: e.target.value,
                            });
                        }}
                        type="number"
                        placeholder="Escribe tu respuesta"
                        className="input input-bordered input-primary w-full max-w-xs"
                    />
                </div>
            ),
        },
        {
            pregunta: "¿Qué estudias actualmente?",
            numCategoria: 0,
            element: (
                <div key={5} className="">
                    <input
                        value={formValues.major}
                        onChange={(e) =>
                            setFormValues({
                                ...formValues,
                                major: e.target.value,
                            })
                        }
                        type="text"
                        placeholder="Escribe tu respuesta"
                        className="input input-bordered input-primary w-full max-w-xs"
                    />
                </div>
            ),
        },
        {
            pregunta: "¿Con qué frecuencia consumes comida rápida o procesada?",
            numCategoria: 1,
            element: (
                <div key={6} className="">
                    <input
                        type="range"
                        min={0}
                        max="3"
                        value={formValues.frequencyJunk}
                        onChange={(e) =>
                            setFormValues({
                                ...formValues,
                                frequencyJunk: e.target.value,
                            })
                        }
                        className="range"
                        step="1"
                    />
                    <div className="flex gap-5 text-center items-center w-full justify-between px-2 text-xs">
                        <div className="w-14">Nunca</div>
                        <div className="w-14">Una vez por semana</div>
                        <div className="w-14">Al menos 3 días a la semana</div>
                        <div className="w-14">Diariamente</div>
                    </div>
                </div>
            ),
        },
        {
            pregunta:
                "¿Con qué frecuencia consumes bebidas azucaradas como refrescos o jugos procesados?",
            numCategoria: 1,
            element: (
                <div key={7} className="">
                    <input
                        type="range"
                        min={0}
                        max="3"
                        value={formValues.frequencySoda}
                        onChange={(e) =>
                            setFormValues({
                                ...formValues,
                                frequencySoda: e.target.value,
                            })
                        }
                        className="range"
                        step="1"
                    />
                    <div className="flex gap-5 text-center items-center w-full justify-between px-2 text-xs">
                        <div className="w-14">Nunca</div>
                        <div className="w-14">Una vez por semana</div>
                        <div className="w-14">Al menos 3 días a la semana</div>
                        <div className="w-14">Diariamente</div>
                    </div>
                </div>
            ),
        },
        {
            pregunta:
                "¿Consideras que la afirmación 'No tengo hábitos alimenticios saludables (como consumir frutas y verduras regularmente)' es cierta para ti?",
            numCategoria: 1,
            element: (
                <div key={8} className="flex gap-3">
                    <p>No</p>
                    <input
                        type="checkbox"
                        defaultChecked={formValues.haveHealthyHabits}
                        className="toggle toggle-error"
                        onChange={() =>
                            setFormValues({
                                ...formValues,
                                haveHealthyHabits:
                                    !formValues.haveHealthyHabits,
                            })
                        }
                    />
                    <p>Si</p>
                </div>
            ),
        },
        {
            pregunta:
                "¿Tienes tendencia a comer en exceso o a tener atracones de comida?",
            numCategoria: 1,
            element: (
                <div key={9} className="flex gap-3">
                    <p>No</p>
                    <input
                        type="checkbox"
                        defaultChecked={formValues.haveFoodIssues}
                        className="toggle toggle-error"
                        onChange={() =>
                            setFormValues({
                                ...formValues,
                                haveFoodIssues: !formValues.haveFoodIssues,
                            })
                        }
                    />
                    <p>Si</p>
                </div>
            ),
        },
        {
            pregunta:
                "¿Sueles tener horarios irregulares de comida o saltarte comidas con frecuencia?",
            numCategoria: 1,
            element: (
                <div key={10} className="flex gap-3">
                    <p>No</p>
                    <input
                        type="checkbox"
                        defaultChecked={formValues.haveIrregularSchedule}
                        className="toggle toggle-error"
                        onChange={() =>
                            setFormValues({
                                ...formValues,
                                haveIrregularSchedule:
                                    !formValues.haveIrregularSchedule,
                            })
                        }
                    />
                    <p>Si</p>
                </div>
            ),
        },
        {
            pregunta: "¿Careces de acceso a alimentos saludables?",
            numCategoria: 1,
            element: (
                <div key={11} className="flex gap-3">
                    <p>No</p>
                    <input
                        type="checkbox"
                        defaultChecked={formValues.haveAccessToHealthy}
                        className="toggle toggle-error"
                        onChange={() =>
                            setFormValues({
                                ...formValues,
                                haveAccessToHealthy:
                                    !formValues.haveAccessToHealthy,
                            })
                        }
                    />
                    <p>Si</p>
                </div>
            ),
        },
        {
            pregunta:
                "¿Cuántas horas a la semana realizas actividad física moderada o intensa?",
            numCategoria: 2,
            element: (
                <div key={12} className="">
                    <input
                        type="range"
                        min={0}
                        max="4"
                        value={formValues.amountExercise}
                        onChange={(e) =>
                            setFormValues({
                                ...formValues,
                                amountExercise: e.target.value,
                            })
                        }
                        className="range"
                        step="1"
                    />
                    <div className="flex gap-5 text-center items-center w-full justify-between px-2 text-xs">
                        <div className="w-14">Más de 8 horas</div>
                        <div className="w-14">Entre 5 y 8 horas</div>
                        <div className="w-14">Entre 2 y 5 horas</div>
                        <div className="w-14">Menos de 2 horas</div>
                        <div className="w-14">No realizo actividad física</div>
                    </div>
                </div>
            ),
        },
        {
            pregunta:
                "¿Cuántas horas al día pasas sentado frente a una pantalla (TV, computadora, teléfono, etc.)?",
            numCategoria: 2,
            element: (
                <div key={13} className="">
                    <input
                        type="range"
                        min={0}
                        max="3"
                        value={formValues.amountSit}
                        onChange={(e) =>
                            setFormValues({
                                ...formValues,
                                amountSit: e.target.value,
                            })
                        }
                        className="range"
                        step="1"
                    />
                    <div className="flex gap-5 text-center items-center w-full justify-between px-2 text-xs">
                        <div className="w-14">Menos de 2 horas</div>
                        <div className="w-14">Entre 2 y 4 horas</div>
                        <div className="w-14">Entre 4 y 6 horas</div>
                        <div className="w-14">Más de 6 horas</div>
                    </div>
                </div>
            ),
        },
        {
            pregunta:
                "¿Eres fumador? En caso afirmativo, ¿con qué frecuencia y en qué cantidad?",
            numCategoria: 2,
            element: (
                <div key={14} className="">
                    <input
                        type="range"
                        min={0}
                        max="3"
                        value={formValues.amountSmoking}
                        onChange={(e) =>
                            setFormValues({
                                ...formValues,
                                amountSmoking: e.target.value,
                            })
                        }
                        className="range"
                        step="1"
                    />
                    <div className="flex gap-5 text-center items-center w-full justify-between px-2 text-xs">
                        <div className="w-14">Nunca</div>
                        <div className="w-14">Algunas veces al mes</div>
                        <div className="w-14">más de una vez por semana</div>
                        <div className="w-14">varias veces por semana</div>
                    </div>
                </div>
            ),
        },
        {
            pregunta:
                "¿Consumes alcohol regularmente? En caso afirmativo, ¿con qué frecuencia y en qué cantidad?",
            numCategoria: 2,
            element: (
                <div key={15} className="">
                    <input
                        type="range"
                        min={0}
                        max="3"
                        value={formValues.amountDrinking}
                        onChange={(e) =>
                            setFormValues({
                                ...formValues,
                                amountDrinking: e.target.value,
                            })
                        }
                        className="range"
                        step="1"
                    />
                    <div className="flex gap-5 text-center items-center w-full justify-between px-2 text-xs">
                        <div className="w-14">Nunca</div>
                        <div className="w-14">Algunas veces al mes</div>
                        <div className="w-14">más de una vez por semana</div>
                        <div className="w-14">varias veces por semana</div>
                    </div>
                </div>
            ),
        },
        {
            pregunta: "¿Cuántas horas duermes al día?",
            numCategoria: 3,
            element: (
                <div key={16} className="">
                    <input
                        type="range"
                        min={0}
                        max="2"
                        value={formValues.amountSleep}
                        onChange={(e) =>
                            setFormValues({
                                ...formValues,
                                amountSleep: e.target.value,
                            })
                        }
                        className="range"
                        step="1"
                    />
                    <div className="flex gap-5 text-center items-center w-full justify-between px-2 text-xs">
                        <div className="w-14">Más de 8 horas</div>
                        <div className="w-14">Entre 6 y 8 horas</div>
                        <div className="w-14">Menos de 6 horas</div>
                    </div>
                </div>
            ),
        },
        {
            pregunta:
                "¿Experimentas problemas de sueño como insomnio o apnea del sueño?",
            numCategoria: 3,
            element: (
                <div key={17} className="flex gap-3">
                    <p>No</p>
                    <input
                        type="checkbox"
                        defaultChecked={formValues.haveSleepIssues}
                        className="toggle toggle-error"
                        onChange={() =>
                            setFormValues({
                                ...formValues,
                                haveSleepIssues: !formValues.haveSleepIssues,
                            })
                        }
                    />
                    <p>Si</p>
                </div>
            ),
        },
        {
            pregunta: "¿Sientes estrés o ansiedad con frecuencia?",
            numCategoria: 3,
            element: (
                <div key={18} className="flex gap-3">
                    <p>No</p>
                    <input
                        type="checkbox"
                        defaultChecked={formValues.haveAnxiety}
                        className="toggle toggle-error"
                        onChange={() =>
                            setFormValues({
                                ...formValues,
                                haveAnxiety: !formValues.haveAnxiety,
                            })
                        }
                    />
                    <p>Si</p>
                </div>
            ),
        },
        {
            pregunta: "¿Tienes antecedentes familiares de obesidad?",
            numCategoria: 3,
            element: (
                <div key={19} className="flex gap-3">
                    <p>No</p>
                    <input
                        type="checkbox"
                        defaultChecked={formValues.havePrecedentsObesity}
                        className="toggle toggle-error"
                        onChange={() =>
                            setFormValues({
                                ...formValues,
                                havePrecedentsObesity:
                                    !formValues.havePrecedentsObesity,
                            })
                        }
                    />
                    <p>Si</p>
                </div>
            ),
        },
        {
            pregunta:
                "¿Tienes antecedentes familiares de enfermedades relacionadas con la obesidad, como diabetes tipo 2 o enfermedades cardíacas?",
            numCategoria: 3,
            element: (
                <div key={20} className="flex gap-3">
                    <p>No</p>
                    <input
                        type="checkbox"
                        defaultChecked={formValues.havePrecedentsIllness}
                        className="toggle toggle-error"
                        onChange={() =>
                            setFormValues({
                                ...formValues,
                                havePrecedentsIllness:
                                    !formValues.havePrecedentsIllness,
                            })
                        }
                    />
                    <p>Si</p>
                </div>
            ),
        },
        {
            pregunta: "¿Tienes un estilo de vida sedentario?",
            numCategoria: 3,
            element: (
                <div key={21} className="flex gap-3">
                    <p>No</p>
                    <input
                        type="checkbox"
                        defaultChecked={formValues.isSedentary}
                        className="toggle toggle-error"
                        onChange={() =>
                            setFormValues({
                                ...formValues,
                                isSedentary: !formValues.isSedentary,
                            })
                        }
                    />
                    <p>Si</p>
                </div>
            ),
        },
        {
            pregunta:
                "¿Tomas algún medicamento que pueda afectar tu peso como antidepresivos o esteroides?",
            numCategoria: 3,
            element: (
                <div key={22} className="flex gap-3">
                    <p>No</p>
                    <input
                        type="checkbox"
                        defaultChecked={formValues.takesMedicine}
                        className="toggle toggle-error"
                        onChange={() =>
                            setFormValues({
                                ...formValues,
                                takesMedicine: !formValues.takesMedicine,
                            })
                        }
                    />
                    <p>Si</p>
                </div>
            ),
        },
        {
            pregunta:
                "¿Tienes algún trastorno médico subyacente que pueda afectar tu peso, como hipotiroidismo o síndrome de ovario poliquístico?",
            numCategoria: 3,
            element: (
                <div key={23} className="flex gap-3">
                    <p>No</p>
                    <input
                        type="checkbox"
                        defaultChecked={formValues.haveHealthIssues}
                        className="toggle toggle-error"
                        onChange={() =>
                            setFormValues({
                                ...formValues,
                                haveHealthIssues: !formValues.haveHealthIssues,
                            })
                        }
                    />
                    <p>Si</p>
                </div>
            ),
        },
        {
            pregunta: "¿Tienes antecedentes de trastornos alimenticios?",
            numCategoria: 3,
            element: (
                <div key={24} className="flex gap-3">
                    <p>No</p>
                    <input
                        type="checkbox"
                        defaultChecked={formValues.haveMentalIssues}
                        className="toggle toggle-error"
                        onChange={() =>
                            setFormValues({
                                ...formValues,
                                haveMentalIssues: !formValues.haveMentalIssues,
                            })
                        }
                    />
                    <p>Si</p>
                </div>
            ),
        },
        {
            pregunta: "¿Experimentas cambios de humor frecuentes o depresión?",
            numCategoria: 3,
            element: (
                <div key={25} className="flex gap-3">
                    <p>No</p>
                    <input
                        type="checkbox"
                        defaultChecked={formValues.haveDepression}
                        className="toggle toggle-error"
                        onChange={() =>
                            setFormValues({
                                ...formValues,
                                haveDepression: !formValues.haveDepression,
                            })
                        }
                    />
                    <p>Si</p>
                </div>
            ),
        },
    ];

    const calculateRisk = async () => {
        //console.log(formValues);
        let points = 0;
        for (const key in formValues) {
            if (["height", "weight", "age", "major"].includes(key)) continue;
            if (formValues[key] === true) {
                points += 1;
            } else if (parseInt(formValues[key])) {
                points += parseInt(formValues[key]);
            }
        }
        //36 puntos posibles + imc
        const height = formValues.height / 100;
        const bmi = formValues.weight / (height * height);
        if (bmi < 18.5) {
            points -= 2;
        } else if (bmi >= 18.5 && bmi < 24.9) {
            points += 0;
        } else if (bmi >= 25 && bmi < 29.9) {
            points += 2;
        } else {
            points += 5;
        }
        setIsLoadingResult(true);
        if (points >= 25) setResult(3);
        else if (points <= 10) setResult(1);
        else setResult(2); //1,2,3
        await new Promise((r) => setTimeout(r, 2000));
        setIsLoadingResult(false);
    };

    if (isLoadingResult)
        return (
            <div className="flex flex-col gap-5 justify-center items-center min-h-[70vh]">
                <h1 className="text-2xl font-bold text-center">
                    Calculando tus resultados...
                </h1>
                <span className="loading loading-lg loading-spinner text-primary"></span>
            </div>
        );

    if (result)
        return (
            <div className="flex flex-col gap-5 justify-center items-center min-h-[70vh]">
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-figure text-warning">
                            {results[result - 1].svg}
                        </div>
                        <div className="stat-title">Tienes un riesgo</div>
                        <div
                            className={`stat-value ${results[result - 1].classColor}`}
                        >
                            {results[result - 1].title}
                        </div>
                        <div className="stat-desc">
                            {results[result - 1].advice}
                        </div>
                    </div>
                </div>
            </div>
        );

    return (
        <div className="bg-[#f0f0d8] py-20 min-h-[70vh]">
            <div>
                <h2 className="text-2xl font-semibold text-center mb-4">
                    Evaluación de Riesgo de Obesidad
                </h2>
                <h1 className="text-center text-xl italic mb-5">
                    "{categories[questions[questionIndex].numCategoria]}"
                </h1>
                <ul className="steps mb-10 w-full">
                    {categories.map((categories, index) => (
                        <li
                            key={index}
                            className={
                                index <= questions[questionIndex].numCategoria
                                    ? "step step-primary"
                                    : "step"
                            }
                        ></li>
                    ))}
                </ul>
            </div>
            <div className="flex justify-center gap-x-20">
                <div className="flex justify-center items-center">
                    {questionIndex !== 0 ? (
                        <button
                            className="btn h-16 w-16 btn-circle btn-outline"
                            onClick={() => setQuestionIndex(questionIndex - 1)}
                        >
                            <span className="material-symbols-outlined">
                                keyboard_double_arrow_left
                            </span>
                        </button>
                    ) : (
                        <div className="w-16"></div>
                    )}
                </div>
                <div className="w-1/2 flex flex-col justify-around min-h-60 overflow-scroll bg-white shadow-md rounded p-8">
                    <h2 className="text-2xl font-semibold text-center mb-4">
                        {questions[questionIndex].pregunta}
                    </h2>
                    <div className="flex justify-center">
                        {questions[questionIndex].element}
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    {questionIndex !== questions.length - 1 ? (
                        <button
                            className="btn h-16 w-16 btn-circle btn-outline"
                            onClick={() => setQuestionIndex(questionIndex + 1)}
                        >
                            <span className="material-symbols-outlined">
                                keyboard_double_arrow_right
                            </span>
                        </button>
                    ) : (
                        <div className="w-16"></div>
                    )}
                </div>
            </div>
            {questionIndex === questions.length - 1 && (
                <div className="flex justify-center mt-20">
                    <button
                        onClick={calculateRisk}
                        className="btn btn-primary text-white text-xl"
                    >
                        Obtener Resultados
                    </button>
                </div>
            )}
        </div>
    );
}

export default Index;
