// Gestão de Tema
function setInitialTheme() {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const themeToggle = document.getElementById("themeToggle");

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute("data-theme", "dark");
    themeToggle.checked = true;
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    themeToggle.checked = false;
  }
}

function toggleTheme() {
  const isDark = document.getElementById("themeToggle").checked;
  document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

function handleSystemThemeChange(e) {
  if (!localStorage.getItem("theme")) {
    document.documentElement.setAttribute("data-theme", e.matches ? "dark" : "light");
    document.getElementById("themeToggle").checked = e.matches;
  }
}

// Gestão de Idiomas (mantida igual)
const translations = {
  pt: {
    title: "TaskDayPomodoro",
    subtitle: "Organize seu tempo",
    addTask: "Adicionar Tarefa ➕",
    taskPlaceholder: "Digite o nome da tarefa",
    startTimeTitle: "Início",
    endTimeTitle: "Fim",
    setSchedule: "Definir Horário",
    updateSchedule: "Atualizar Horário 🔄",
    longBreakLabel: "Duração da pausa longa:",
    setLongBreak: "Definir Pausa",
    updateLongBreak: "Atualizar Pausa 🔄",
    startPomodoro: "Iniciar Tarefa",
    edit: "Editar",
    delete: "Excluir 🗑️",
    currentTask: "Tarefa atual: ",
    sessionStats: "Blocos: {0} | Pausas curtas: {1} | Pausas longas: {2} | Pausas puladas: {3} | Tarefas concluídas: {4}",
    progressTitle: "Progresso",
    congrats: "Parabéns! Todas as tarefas foram concluídas! 🎉✨",
    editModalTitle: "Editar Tarefa",
    saveEdit: "Salvar",
    cancelEdit: "Cancelar",
    confirmModalTitle: "Concluir Tarefa",
    confirmModalText: "Deseja marcar esta tarefa como concluída?",
    confirmYes: "Sim",
    confirmNo: "Não",
    progressConfirmModalTitle: "Está conseguindo?",
    progressConfirmModalText: "Você está progredindo bem com esta tarefa? Se sim, continuará nela; se não, passaremos para a próxima tarefa.",
    progressConfirmYes: "Sim, continuar",
    progressConfirmNo: "Não, próxima tarefa",
    pauseMessage: "Hora de uma pausa! Descanse por {0}.",
    nextTaskMessage: "Quando a pausa terminar, pularemos para a próxima tarefa por enquanto. {0}",
    pauseMessages: [
      "Aproveite para tomar uma água! 💧",
      "Que tal alongar um pouco? 🤸",
      "Respire fundo e relaxe! 🧘",
      "Dê uma olhada pela janela! 🪟"
    ],
    skipPause: "Pular Pausa",
    startTimerMessage: "O Pomodoro começará às ",
    updateScheduleFromModal: "Atualizar Horário",
    pomodoroInfoTitle: "Como funciona o Pomodoro?",
    pomodoroInfoText: "A técnica Pomodoro foi criada por Francesco Cirillo no final dos anos 1980, na Itália, quando ele era estudante universitário. O nome 'Pomodoro' vem de um cronômetro de cozinha em forma de tomate que Cirillo usava para gerenciar seu tempo. A técnica divide o trabalho em blocos de 25 minutos, chamados de 'Pomodoros', seguidos por pausas curtas de 5 minutos. A cada 4 blocos, há uma pausa longa de 15 a 30 minutos, ideal para recarregar as energias. Quando uma tarefa is concluída, há uma pausa de transição de 3 minutos antes de iniciar a próxima tarefa. Um 'bloco' é um ciclo completo de 25 minutos de trabalho focado. Sugerimos 15 minutos de pausa longa para tarefas simples e 30 minutos para tarefas mais complexas. Referências: https://pt.wikipedia.org/wiki/T%C3%A9cnica_pomodoro.",
    closeModal: "x",
    completionModalTitle: "Parabéns!🎆",
    completionMessage: "Todas as tarefas foram concluídas! 🎉 🎉✨",
    completionStats: "📊 Estatísticas da sua sessão:\n- Tempo total: {0} minutos (tempo total de trabalho e pausas)\n- Blocos: {1} (cada bloco é um ciclo de 25 minutos de trabalho focado)\n- Pausas curtas: {2} (pausas de 5 minutos após cada bloco)\n- Pausas longas: {3} (pausas de 15-30 minutos a cada 4 blocos)\n- Pausas puladas: {4} (pausas curtas ou longas que você optou por pular)\n- Tarefas concluídas: {5} (tarefas marcadas como finalizadas)",
    completionLink: "Gostou do TaskDayPomodoro? Continue usando pelo link: https://dev-juan-ibanez.github.io/task-day-pomodoro/",
    closeCompletion: "Fechar  🚪",
    exportCompletion: "Exportar como PNG 📷",
    resetSystem: "Reiniciar Sistema 🔄",
    noTasks: "Não há tarefas para iniciar! Adicione uma tarefa.",
    noSchedule: "Por favor, defina o horário e a duração da pausa longa antes de iniciar.",
    endTimePassed: "O horário de término já passou! Por favor, atualize o horário.",
    errorModalTitle: "Erro",
    closeErrorButton: "Fechar",
    longBreakSuggestion: "Sugerimos que para tarefas simples, use 15 minutos; para tarefas complexas, use 30 minutos.",
    longBreakOptions: {
      15: "15 minutos",
      20: "20 minutos",
      25: "25 minutos",
      30: "30 minutos"
    },
    footerText: "Feito por Juan Ibañez com ❤️ para produtividade!",
    copyright: "© Todos os direitos reservados 2025.",
    shareCompletion: "Compartilhar  📤",
    shareNotSupported: "Compartilhamento direto não suportado neste dispositivo. Exporte a imagem e compartilhe manualmente.",
    pauseButton: "⏸️ Pausar",
    resumeButton: "▶️ Continuar",
    restartButton: "🔄 Reiniciar"
  },
  en: {
    title: "TaskDayPomodoro",
    subtitle: "Organize your time",
    addTask: "Add Task ➕",
    taskPlaceholder: "Enter task name",
    startTimeTitle: "Start",
    endTimeTitle: "End",
    setSchedule: "Set Schedule",
    updateSchedule: "Update Schedule 🔄",
    longBreakLabel: "Long break duration:",
    setLongBreak: "Set Break",
    updateLongBreak: "Update Break 🔄",
    startPomodoro: "Start Task",
    edit: "Edit",
    delete: "Delete 🗑️",
    currentTask: "Current task: ",
    sessionStats: "Blocks: {0} | Short breaks: {1} | Long breaks: {2} | Skipped breaks: {3} | Completed tasks: {4}",
    progressTitle: "Progress",
    congrats: "Congratulations! All tasks are completed!",
    editModalTitle: "Edit Task",
    saveEdit: "Save",
    cancelEdit: "Cancel",
    confirmModalTitle: "Complete Task",
    confirmModalText: "Do you want to mark this task as completed?",
    confirmYes: "Yes",
    confirmNo: "No",
    progressConfirmModalTitle: "Are you making progress?",
    progressConfirmModalText: "Are you doing well with this task? If yes, you'll continue with it; if no, we'll move to the next task.",
    progressConfirmYes: "Yes, continue",
    progressConfirmNo: "No, next task",
    pauseMessage: "Time for a break! Rest for {0}.",
    nextTaskMessage: "When the break ends, we'll move to the next task for now. {0}",
    pauseMessages: [
      "Take a moment to drink some water! 💧",
      "How about a quick stretch? 🤸",
      "Breathe deeply and relax! 🧘",
      "Look out the window for a bit! 🪟"
    ],
    skipPause: "Skip Break",
    startTimerMessage: "The Pomodoro will start at ",
    updateScheduleFromModal: "Update Schedule",
    pomodoroInfoTitle: "How does Pomodoro work?",
    pomodoroInfoText: "The Pomodoro Technique was created by Francesco Cirillo in the late 1980s in Italy, when he was a university student. The name 'Pomodoro' comes from a tomato-shaped kitchen timer Cirillo used to manage his time. The technique divides work into 25-minute blocks, called 'Pomodoros,' followed by 5-minute short breaks. Every 4 blocks, there's a long break of 15 to 30 minutes, ideal for recharging. When a task is completed, there's a 3-minute transition break before the next task. A 'block' is a complete 25-minute cycle of focused work. We suggest 15-minute long breaks for simple tasks and 30 minutes for complex tasks. References: https://pt.wikipedia.org/wiki/T%C3%A9cnica_pomodoro.",
    closeModal: "x",
    completionModalTitle: "Congratulations!🎆",
    completionMessage: "All tasks are completed! 🎉 🎉✨",
    completionStats: "📊 Your session statistics:\n- Total time: {0} minutes (total time spent working and on breaks)\n- Blocks: {1} (each block is a 25-minute cycle of focused work)\n- Short breaks: {2} (5-minute breaks after each block)\n- Long breaks: {3} (15-30 minute breaks every 4 blocks)\n- Skipped breaks: {4} (short or long breaks you chose to skip)\n- Completed tasks: {5} (tasks marked as finished)",
    completionLink: "Enjoyed TaskDayPomodoro? Keep using it at: https://dev-juan-ibanez.github.io/task-day-pomodoro/",
    closeCompletion: "Close",
    exportCompletion: "Export as PNG",
    resetSystem: "Reset System",
    noTasks: "No tasks to start! Please add a task.",
    noSchedule: "Please set the schedule and long break duration before starting.",
    endTimePassed: "The end time has already passed! Please update the schedule.",
    errorModalTitle: "Error",
    closeErrorButton: "Close",
    longBreakSuggestion: "We suggest using 15 minutes for simple tasks and 30 minutes for complex tasks.",
    longBreakOptions: {
      15: "15 minutes",
      20: "20 minutes",
      25: "25 minutes",
      30: "30 minutes"
    },
    footerText: "Made by Juan Ibañez with ❤️ for productivity!",
    copyright: "© All rights reserved 2025.",
    shareCompletion: "Share",
    shareNotSupported: "Direct sharing is not supported on this device. Please export the image and share manually.",
    pauseButton: "⏸️ Pause",
    resumeButton: "▶️ Resume",
    restartButton: "🔄 Restart"
  },
  es: {
    title: "TaskDayPomodoro",
    subtitle: "¡Organiza tu tiempo!",
    addTask: "Agregar Tarea ➕",
    taskPlaceholder: "Ingresa el nombre de la tarea",
    startTimeTitle: "Inicio",
    endTimeTitle: "Fin",
    setSchedule: "Establecer Horario",
    updateSchedule: "Actualizar Horario 🔄",
    longBreakLabel: "Duración del descanso largo:",
    setLongBreak: "Establecer Descanso",
    updateLongBreak: "Actualizar Descanso 🔄",
    startPomodoro: "Iniciar Tarea",
    edit: "Editar",
    delete: "Eliminar 🗑️",
    currentTask: "Tarea actual: ",
    sessionStats: "Bloques: {0} | Descansos cortos: {1} | Descansos largos: {2} | Descansos saltados: {3} | Tareas completadas: {4}",
    progressTitle: "Progreso",
    congrats: "¡Felicidades! ¡Todas las tareas están completadas!",
    editModalTitle: "Editar Tarea",
    saveEdit: "Guardar",
    cancelEdit: "Cancelar",
    confirmModalTitle: "Completar Tarea",
    confirmModalText: "¿Deseas marcar esta tarea como completada?",
    confirmYes: "Sí",
    confirmNo: "No",
    progressConfirmModalTitle: "¿Estás progresando?",
    progressConfirmModalText: "¿Estás avanzando bien con esta tarea? Si sí, continuarás con ella; si no, pasaremos a la siguiente tarea.",
    progressConfirmYes: "Sí, continuar",
    progressConfirmNo: "No, siguiente tarea",
    pauseMessage: "¡Hora de un descanso! Descansa por {0}.",
    nextTaskMessage: "Cuando termine el descanso, pasaremos a la siguiente tarea por ahora. {0}",
    pauseMessages: [
      "¡Aprovecha para tomar un poco de agua! 💧",
      "¿Qué tal un estiramiento rápido? 🤸",
      "¡Respira profundamente y relájate! 🧘",
      "¡Mira por la ventana un momento! 🪟"
    ],
    skipPause: "Saltar Descanso",
    startTimerMessage: "El Pomodoro comenzará a las ",
    updateScheduleFromModal: "Actualizar Horario",
    pomodoroInfoTitle: "¿Cómo funciona el Pomodoro?",
    pomodoroInfoText: "La técnica Pomodoro fue creada por Francesco Cirillo a finales de los años 1980 en Italia, cuando era estudiante universitario. El nombre 'Pomodoro' proviene de un cronómetro de cocina en forma de tomate que Cirillo usaba para gestionar su tiempo. La técnica divide el trabajo en bloques de 25 minutos, llamados 'Pomodoros', seguidos de descansos cortos de 5 minutos. Cada 4 bloques, hay un descanso largo de 15 a 30 minutos, ideal para recargar energías. Cuando se completa una tarea, hay un descanso de transición de 3 minutos antes de la siguiente tarea. Un 'bloque' es un ciclo completo de 25 minutos de trabajo enfocado. Sugerimos 15 minutos de descanso largo para tareas simples y 30 minutos para tareas complexas. Referencias: https://pt.wikipedia.org/wiki/T%C3%A9cnica_pomodoro.",
    closeModal: "x",
    completionModalTitle: "¡Felicidades!🎆",
    completionMessage: "¡Todas las tareas están completadas! 🎉 🎉✨",
    completionStats: "📊 Estadísticas de tu sesión:\n- Tiempo total: {0} minutos (tiempo total de trabajo y descansos)\n- Bloques: {1} (cada bloque es un ciclo de 25 minutos de trabajo enfocado)\n- Descansos cortos: {2} (descansos de 5 minutos después de cada bloque)\n- Descansos largos: {3} (descansos de 15-30 minutos cada 4 bloques)\n- Descansos saltados: {4} (descansos cortos o largos que elegiste saltar)\n- Tareas completadas: {5} (tareas marcadas como finalizadas)",
    completionLink: "¿Te gustó TaskDayPomodoro? Sigue usándolo en: https://dev-juan-ibanez.github.io/task-day-pomodoro/",
    closeCompletion: "Cerrar",
    exportCompletion: "Exportar como PNG",
    resetSystem: "Reiniciar Sistema",
    noTasks: "¡No hay tareas para iniciar! Por favor, agrega una tarea.",
    noSchedule: "Por favor, establece el horario y la duración del descanso largo antes de iniciar.",
    endTimePassed: "¡La hora de finalización ya ha pasado! Por favor, actualiza el horario.",
    errorModalTitle: "Error",
    closeErrorButton: "Cerrar",
    longBreakSuggestion: "Sugerimos usar 15 minutos para tareas simples and 30 minutos para tareas complejas.",
    longBreakOptions: {
      15: "15 minutos",
      20: "20 minutos",
      25: "25 minutos",
      30: "30 minutos"
    },
    footerText: "¡Hecho por Juan Ibañez con ❤️ para la productividad!",
    copyright: "© Todos los derechos reservados 2025.",
    shareCompletion: "Compartir",
    shareNotSupported: "El compartir directamente no está soportado en este dispositivo. Por favor, exporta la imagen y compártela manualmente.",
    pauseButton: "⏸️ Pausar",
    resumeButton: "▶️ Continuar",
    restartButton: "🔄 Reiniciar"
  }
};

// ========== SISTEMA DE TIMESTAMP PARA FUNCIONAR EM SEGUNDO PLANO ==========
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let schedule = JSON.parse(localStorage.getItem("schedule")) || { startTime: null, endTime: null };
let isScheduleSet = false;
let isLongBreakSet = false;
let longBreakDuration = parseInt(localStorage.getItem("longBreakDuration")) || 15;

// Timer management - SISTEMA BASEADO EM TIMESTAMP
let mainInterval = null;
let isPomodoroActive = false;
let isPaused = false;
let isModalOpen = false;
let currentMode = 'work'; // 'work', 'short_break', 'long_break', 'transition'
let currentTaskId = null;

// Statistics
let totalTimeSeconds = parseInt(localStorage.getItem("totalTimeSeconds")) || 0;
let sessionCount = parseInt(localStorage.getItem("sessionCount")) || 0;
let blockCount = parseInt(localStorage.getItem("blockCount")) || 0;
let incompleteUnits = parseInt(localStorage.getItem("incompleteUnits")) || 0;
let shortBreaks = parseInt(localStorage.getItem("shortBreaks")) || 0;
let longBreaks = parseInt(localStorage.getItem("longBreaks")) || 0;
let skippedBreaks = parseInt(localStorage.getItem("skippedBreaks")) || 0;
let skippedShortBreaks = parseInt(localStorage.getItem("skippedShortBreaks")) || 0;
let skippedLongBreaks = parseInt(localStorage.getItem("skippedLongBreaks")) || 0;
let completedTasks = parseInt(localStorage.getItem("completedTasks")) || 0;

// NOVO: Sistema de timestamp para funcionar em segundo plano
let timerStartTimestamp = 0;
let timerDuration = 0;
let remainingTimeAtPause = 0;
let lastActiveTimestamp = 0;

// Validação inicial
if (sessionCount < 4 && blockCount > 0) {
  blockCount = 0;
  incompleteUnits = sessionCount;
} else if (sessionCount >= 4) {
  blockCount = Math.floor(sessionCount / 4);
  incompleteUnits = sessionCount % 4;
}
if (skippedBreaks !== skippedShortBreaks + skippedLongBreaks) {
  skippedBreaks = skippedShortBreaks + skippedLongBreaks;
}

// ========== SISTEMA DE TIMER BASEADO EM TIMESTAMP ==========
function startMainTimer() {
  stopMainTimer();
  
  // Configura o timer baseado no modo atual
  switch(currentMode) {
    case 'work':
      timerDuration = 25 * 60;
      break;
    case 'short_break':
      timerDuration = 5 * 60;
      break;
    case 'long_break':
      timerDuration = longBreakDuration * 60;
      break;
    case 'transition':
      timerDuration = 3 * 60;
      break;
  }
  
  timerStartTimestamp = Math.floor(Date.now() / 1000);
  lastActiveTimestamp = timerStartTimestamp;
  
  // Salva o estado do timer
  saveTimerState();
  
  console.log(`⏰ Iniciando timer: ${currentMode}, duração: ${timerDuration}s`);
  
  mainInterval = setInterval(() => {
    updateTimerFromTimestamp();
  }, 1000);
}

function stopMainTimer() {
  if (mainInterval) {
    clearInterval(mainInterval);
    mainInterval = null;
  }
}

// FUNÇÃO PRINCIPAL: Atualiza o timer baseado no timestamp
function updateTimerFromTimestamp() {
  if (isPaused || isModalOpen) return;
  
  const now = Math.floor(Date.now() / 1000);
  const elapsed = now - timerStartTimestamp;
  const remaining = timerDuration - elapsed;
  
  // Atualiza tempo total
  if (now > lastActiveTimestamp) {
    const timeDiff = now - lastActiveTimestamp;
    totalTimeSeconds += timeDiff;
    lastActiveTimestamp = now;
  }
  
  if (remaining <= 0) {
    // Timer completado
    handleTimerCompletion();
    return;
  }
  
  // Atualiza display
  updateCurrentTimerDisplay(remaining);
  
  // Atualiza stats periodicamente
  if (totalTimeSeconds % 5 === 0) {
    saveStats();
    updateSessionStats();
  }
}

function updateCurrentTimerDisplay(remaining) {
  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;
  const display = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  
  if (currentMode.includes('break') || currentMode === 'transition') {
    document.getElementById("pauseTimer").textContent = display;
  } else {
    const lang = localStorage.getItem("language") || "pt";
    const task = tasks.find(t => t.id === currentTaskId);
    const timerDisplay = task
      ? `${translations[lang].currentTask}${task.name} - ${display}`
      : display;
    document.getElementById("timer").textContent = timerDisplay;
  }
}

function handleTimerCompletion() {
  stopMainTimer();
  clearTimerState();
  
  console.log(`✅ Timer completado: ${currentMode}`);
  
  switch(currentMode) {
    case 'work':
      sessionCount++;
      incompleteUnits = sessionCount % 4;
      blockCount = Math.floor(sessionCount / 4);
      saveStats();
      
      if (sessionCount % 4 === 0) {
        startBreak('long_break');
      } else {
        openProgressConfirmModal(currentTaskId);
      }
      break;
      
    case 'short_break':
    case 'long_break':
    case 'transition':
      endBreak();
      break;
  }
}

// ========== SISTEMA DE PERSISTÊNCIA DO TIMER ==========
function saveTimerState() {
  const timerState = {
    mode: currentMode,
    startTime: timerStartTimestamp,
    duration: timerDuration,
    isPaused: isPaused,
    isActive: isPomodoroActive,
    taskId: currentTaskId,
    totalTime: totalTimeSeconds,
    lastActive: lastActiveTimestamp
  };
  localStorage.setItem("pomodoroTimerState", JSON.stringify(timerState));
}

function clearTimerState() {
  localStorage.removeItem("pomodoroTimerState");
}

function recoverTimerState() {
  const savedState = localStorage.getItem("pomodoroTimerState");
  if (!savedState) return false;
  
  try {
    const state = JSON.parse(savedState);
    const now = Math.floor(Date.now() / 1000);
    const elapsed = now - state.startTime;
    
    if (elapsed >= state.duration) {
      // Timer expirou enquanto a página estava fechada
      console.log("⏰ Timer expirou enquanto a página estava fechada");
      clearTimerState();
      return false;
    }
    
    // Recupera o estado
    currentMode = state.mode;
    timerStartTimestamp = state.startTime;
    timerDuration = state.duration;
    isPaused = state.isPaused;
    isPomodoroActive = state.isActive;
    currentTaskId = state.taskId;
    totalTimeSeconds = state.totalTime + (now - state.lastActive);
    lastActiveTimestamp = now;
    
    // Atualiza UI
    const remaining = state.duration - elapsed;
    updateCurrentTimerDisplay(remaining);
    toggleSections();
    
    // Se não estiver pausado, reinicia o timer
    if (!isPaused && isPomodoroActive) {
      startMainTimer();
    }
    
    console.log("🕒 Timer recuperado - Tempo restante:", Math.floor(remaining / 60) + "min");
    return true;
    
  } catch (error) {
    console.error("Erro ao recuperar timer:", error);
    clearTimerState();
    return false;
  }
}

// ========== FUNÇÕES DE PAUSA CORRIGIDAS ==========
function startBreak(breakType = 'short_break', switchTask = false) {
  const lang = localStorage.getItem("language") || "pt";
  
  switch(breakType) {
    case 'short_break':
      currentMode = 'short_break';
      break;
    case 'long_break':
      currentMode = 'long_break';
      break;
    case 'transition':
      currentMode = 'transition';
      break;
  }
  
  isPomodoroActive = false;
  
  // Prepara mensagem da pausa
  const messages = translations[lang].pauseMessages;
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  let pauseMessage = '';
  
  if (breakType === 'transition') {
    pauseMessage = `${translations[lang].nextTaskMessage.replace("{0}", randomMessage)}`;
  } else {
    const pauseDisplay = Math.floor(timerDuration / 60) + " minutos";
    pauseMessage = `${translations[lang].pauseMessage.replace("{0}", pauseDisplay)} ${randomMessage}`;
  }
  
  // Atualiza UI
  document.getElementById("pauseMessage").textContent = pauseMessage;
  document.getElementById("pauseModal").classList.add("active");
  
  // Configura botão de pular pausa
  const skipButton = document.getElementById("skipPause");
  if (skipButton) {
    const newSkipButton = skipButton.cloneNode(true);
    skipButton.parentNode.replaceChild(newSkipButton, skipButton);
    newSkipButton.addEventListener('click', () => skipBreak(breakType, switchTask));
  }
  
  // Envia notificação
  sendNotification(
    breakType === 'long_break' ? "Pausa Longa!" : "Hora da Pausa!",
    pauseMessage
  );
  
  console.log(`⏸️ Iniciando ${breakType}`);
  
  // Inicia timer
  startMainTimer();
}

function skipBreak(breakType, switchTask) {
  stopMainTimer();
  clearTimerState();
  
  // Registra estatísticas
  if (!breakType.includes('transition')) {
    if (breakType === 'long_break') {
      skippedLongBreaks++;
      skippedBreaks++;
    } else {
      skippedShortBreaks++;
      skippedBreaks++;
    }
  }
  
  // Fecha modal
  document.getElementById("pauseModal").classList.remove("active");
  
  // Atualiza stats
  saveStats();
  updateSessionStats();
  
  // Decide próxima ação
  if (switchTask) {
    moveToNextTask();
  } else {
    startPomodoro(currentTaskId);
  }
}

function endBreak() {
  if (!currentMode.includes('break') && currentMode !== 'transition') return;
  
  // Registra estatísticas de pausas completadas
  if (currentMode === 'long_break') {
    longBreaks++;
  } else if (currentMode === 'short_break') {
    shortBreaks++;
  }
  
  // Fecha modal se estiver aberto
  document.getElementById("pauseModal").classList.remove("active");
  
  saveStats();
  updateSessionStats();
  
  // Reinicia modo de trabalho
  currentMode = 'work';
  startPomodoro(currentTaskId);
}

// ========== FUNÇÕES DE CRUD DE TAREFAS ==========
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function saveSchedule() {
  localStorage.setItem("schedule", JSON.stringify(schedule));
}

function saveStats() {
  localStorage.setItem("totalTimeSeconds", totalTimeSeconds);
  localStorage.setItem("sessionCount", sessionCount);
  localStorage.setItem("blockCount", blockCount);
  localStorage.setItem("incompleteUnits", incompleteUnits);
  localStorage.setItem("shortBreaks", shortBreaks);
  localStorage.setItem("longBreaks", longBreaks);
  localStorage.setItem("skippedShortBreaks", skippedShortBreaks);
  localStorage.setItem("skippedLongBreaks", skippedLongBreaks);
  localStorage.setItem("skippedBreaks", skippedBreaks);
  localStorage.setItem("completedTasks", completedTasks);
}

function toggleTaskComplete(id) {
  tasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
  completedTasks = tasks.filter(task => task.completed).length;
  saveTasks();
  saveStats();
  if (tasks.every(task => task.completed)) {
    isPomodoroActive = false;
    stopMainTimer();
    clearTimerState();
    openCompletionModal();
  } else if (currentTaskId && id === currentTaskId) {
    startBreak('transition', true);
  } else {
    renderTasks();
  }
}

function addTask(name) {
  tasks.push({ id: Date.now(), name, completed: false });
  saveTasks();
  renderTasks();
  toggleSections();
}

function editTask(id, newName) {
  tasks = tasks.map(task => task.id === id ? { ...task, name: newName } : task);
  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  completedTasks = tasks.filter(task => task.completed).length;
  saveTasks();
  saveStats();
  renderTasks();
  toggleSections();
}

function renderTasks() {
  const taskList = document.querySelector(".tasks");
  taskList.innerHTML = "";
  const lang = localStorage.getItem("language") || "pt";
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";
    if (task.id === currentTaskId) li.classList.add("current");
    if (currentTaskId) {
      li.innerHTML = `
        <span>${task.name}</span>
        <div>
          <input type="checkbox" ${task.completed ? "checked" : ""} onchange="openConfirmModal(${task.id})">
        </div>
      `;
    } else {
      li.innerHTML = `
        <span>${task.name}</span>
        <div>
          <button class="edit" onclick="openEditModal(${task.id})">${translations[lang].edit}</button>
          <button class="delete" onclick="deleteTask(${task.id})">${translations[lang].delete}</button>
        </div>
      `;
    }
    taskList.appendChild(li);
  });
}

// ========== FUNÇÃO START POMODORO CORRIGIDA ==========
function startPomodoro(taskId) {
  const task = tasks.find(t => t.id === taskId);
  const lang = localStorage.getItem("language") || "pt";

  // Validações
  if (!task) {
    showError(translations[lang].noTasks);
    return;
  }
  
  if (!isScheduleSet || !isLongBreakSet) {
    showError(translations[lang].noSchedule);
    return;
  }

  // Verifica horários
  const now = new Date();
  const [hours, minutes] = schedule.startTime.split(":").map(Number);
  const startTime = new Date();
  startTime.setHours(hours, minutes, 0, 0);
  
  const [endHours, endMinutes] = schedule.endTime.split(":").map(Number);
  const endTime = new Date();
  endTime.setHours(endHours, endMinutes, 0, 0);

  if (now > endTime) {
    showError(translations[lang].endTimePassed);
    return;
  }

  if (now < startTime) {
    startTimerCountdown(schedule.startTime, taskId);
    return;
  }

  // Configura estado do Pomodoro
  currentTaskId = taskId;
  currentMode = 'work';
  isPomodoroActive = true;
  isPaused = false;
  isModalOpen = false;

  console.log(`🍅 Iniciando Pomodoro - Tarefa: ${task.name}`);

  // Atualiza UI
  toggleSections();

  // Inicia timer
  startMainTimer();
}

// ========== FUNÇÕES DE CONTROLE CORRIGIDAS ==========
function togglePause() {
  const lang = localStorage.getItem("language") || "pt";
  const pauseBtn = document.getElementById("pauseButton");
  
  if (!pauseBtn) return;

  isPaused = !isPaused;
  
  if (isPaused) {
    pauseBtn.textContent = translations[lang].resumeButton;
    stopMainTimer();
    // Calcula o tempo restante no momento do pause
    const now = Math.floor(Date.now() / 1000);
    remainingTimeAtPause = timerDuration - (now - timerStartTimestamp);
    console.log("⏸️ Pomodoro pausado - Tempo restante:", Math.floor(remainingTimeAtPause / 60) + "min");
  } else {
    pauseBtn.textContent = translations[lang].pauseButton;
    // Reinicia o timer com o tempo restante
    timerStartTimestamp = Math.floor(Date.now() / 1000);
    timerDuration = remainingTimeAtPause;
    startMainTimer();
    console.log("▶️ Pomodoro continuado");
  }
  
  saveTimerState();
}

function restartPomodoro() {
  const lang = localStorage.getItem("language") || "pt";
  
  if (confirm("Deseja realmente reiniciar o Pomodoro? O progresso atual será perdido.")) {
    stopMainTimer();
    clearTimerState();
    
    // Reseta estados
    isPomodoroActive = false;
    isPaused = false;
    isModalOpen = false;
    currentTaskId = null;
    currentMode = 'work';
    
    // Atualiza UI
    toggleSections();
    
    console.log("🔄 Pomodoro reiniciado");
  }
}

function resetSystem() {
  tasks = [];
  schedule = { startTime: null, endTime: null };
  isScheduleSet = false;
  isLongBreakSet = false;
  isPomodoroActive = false;
  totalTimeSeconds = 0;
  sessionCount = 0;
  blockCount = 0;
  incompleteUnits = 0;
  shortBreaks = 0;
  longBreaks = 0;
  skippedBreaks = 0;
  skippedShortBreaks = 0;
  skippedLongBreaks = 0;
  completedTasks = 0;
  currentTaskId = null;
  currentMode = 'work';
  isModalOpen = false;
  isPaused = false;

  stopMainTimer();
  clearTimerState();

  saveTasks();
  saveSchedule();
  saveStats();
  localStorage.removeItem("longBreakDuration");

  document.getElementById("completionModal").classList.remove("active");
  document.getElementById("pauseModal").classList.remove("active");
  document.getElementById("startTimerModal").classList.remove("active");
  document.getElementById("confirmModal").classList.remove("active");
  document.getElementById("progressConfirmModal").classList.remove("active");
  document.getElementById("errorModal").classList.remove("active");

  // Resetar botões de controle
  document.getElementById("pauseButton").style.display = "none";
  document.getElementById("restartButton").style.display = "none";

  console.log("🔄 Sistema reiniciado - Todos os contadores zerados");
  toggleSections();
}

// ========== FUNÇÕES AUXILIARES ==========
function moveToNextTask() {
  const nextTask = tasks.find(t => !t.completed && t.id !== currentTaskId);
  
  if (nextTask) {
    currentTaskId = nextTask.id;
    startPomodoro(nextTask.id);
  } else {
    if (tasks.every(task => task.completed)) {
      endPomodoroSession();
    } else {
      startPomodoro(currentTaskId);
    }
  }
}

function endPomodoroSession() {
  stopMainTimer();
  clearTimerState();
  isPomodoroActive = false;
  currentTaskId = null;
  currentMode = 'work';
  
  openCompletionModal();
  toggleSections();
}

// ========== MODAIS CORRIGIDOS ==========
function openProgressConfirmModal(taskId) {
  if (!tasks.find(t => t.id === taskId)) return;
  
  isModalOpen = true;
  stopMainTimer();
  
  document.getElementById("progressConfirmModal").classList.add("active");

  const yesBtn = document.getElementById("progressConfirmYes");
  const noBtn = document.getElementById("progressConfirmNo");
  
  if (yesBtn && noBtn) {
    const newYesBtn = yesBtn.cloneNode(true);
    const newNoBtn = noBtn.cloneNode(true);
    yesBtn.parentNode.replaceChild(newYesBtn, yesBtn);
    noBtn.parentNode.replaceChild(newNoBtn, noBtn);
    
    newYesBtn.addEventListener('click', () => {
      closeProgressConfirmModal();
      startBreak('short_break', false);
    });

    newNoBtn.addEventListener('click', () => {
      closeProgressConfirmModal();
      startBreak('short_break', true);
    });
  }
}

function closeProgressConfirmModal() {
  document.getElementById("progressConfirmModal").classList.remove("active");
  isModalOpen = false;
  
  if (!isPaused && isPomodoroActive) {
    startMainTimer();
  }
}

// Modal para Confirmação de Conclusão
function openConfirmModal(taskId) {
  document.getElementById("confirmModal").classList.add("active");
  
  const yesBtn = document.getElementById("confirmYes");
  const noBtn = document.getElementById("confirmNo");
  
  if (yesBtn && noBtn) {
    const newYesBtn = yesBtn.cloneNode(true);
    const newNoBtn = noBtn.cloneNode(true);
    yesBtn.parentNode.replaceChild(newYesBtn, yesBtn);
    noBtn.parentNode.replaceChild(newNoBtn, noBtn);
    
    newYesBtn.addEventListener('click', () => {
      toggleTaskComplete(taskId);
      document.getElementById("confirmModal").classList.remove("active");
    });
    
    newNoBtn.addEventListener('click', () => {
      document.getElementById("confirmModal").classList.remove("active");
      renderTasks();
    });
  }
}

// Modal para Edição
function openEditModal(id) {
  const task = tasks.find(t => t.id === id);
  const lang = localStorage.getItem("language") || "pt";
  document.getElementById("editTaskName").value = task.name;
  document.getElementById("editModal").classList.add("active");
  
  const saveBtn = document.getElementById("saveEdit");
  if (saveBtn) {
    const newSaveBtn = saveBtn.cloneNode(true);
    saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);
    
    newSaveBtn.addEventListener('click', () => {
      const newName = document.getElementById("editTaskName").value;
      if (newName) {
        editTask(id, newName);
        document.getElementById("editModal").classList.remove("active");
      } else {
        alert(translations[lang].taskPlaceholder);
      }
    });
  }
}

function closeEditModal() {
  document.getElementById("editModal").classList.remove("active");
}

// ========== FUNÇÕES RESTANTES (mantidas do original) ==========
let startTimerInterval = null;

function startTimerCountdown(startTime, taskId) {
  const lang = localStorage.getItem("language") || "pt";
  const [hours, minutes] = startTime.split(":").map(Number);
  const startDate = new Date();
  startDate.setHours(hours, minutes, 0, 0);
  document.getElementById("startTimerMessage").textContent = `${translations[lang].startTimerMessage}${startTime}`;
  document.getElementById("startTimerModal").classList.add("active");

  const updateCountdown = () => {
    const now = new Date();
    const timeDiff = startDate - now;
    if (timeDiff <= 0) {
      clearInterval(startTimerInterval);
      document.getElementById("startTimerModal").classList.remove("active");
      startPomodoro(taskId);
      return;
    }
    const minutes = Math.floor(timeDiff / 1000 / 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);
    document.getElementById("startTimer").textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  updateCountdown();
  startTimerInterval = setInterval(updateCountdown, 1000);
}

function openPomodoroInfoModal() {
  document.getElementById("pomodoroInfoModal").classList.add("active");
}

function closePomodoroInfoModal() {
  document.getElementById("pomodoroInfoModal").classList.remove("active");
}

function openCompletionModal() {
  updateSessionStats();
  updateCompletionModal();
  updateCompletionChart();
  document.getElementById("completionModal").classList.add("active");
}

function closeCompletionModal() {
  document.getElementById("completionModal").classList.remove("active");
}

function updateSessionStats() {
  const lang = localStorage.getItem("language") || "pt";
  const skippedInfo = [];
  if (skippedShortBreaks > 0) skippedInfo.push(`${skippedShortBreaks} curtas`);
  if (skippedLongBreaks > 0) skippedInfo.push(`${skippedLongBreaks} longas`);
  const skippedText = skippedInfo.length > 0 ? ` (${skippedInfo.join(', ')})` : '';
  let blockText = `${blockCount}`;
  if (incompleteUnits > 0) {
    blockText += ` | Unidades incompletas: ${incompleteUnits}`;
  }
  document.getElementById("sessionStats").textContent = translations[lang].sessionStats
    .replace("{0}", blockText)
    .replace("{1}", shortBreaks)
    .replace("{2}", longBreaks)
    .replace("{3}", `${skippedBreaks}${skippedText}`)
    .replace("{4}", completedTasks);
}

// Atualiza o modal de conclusão
function updateCompletionModal() {
  const lang = localStorage.getItem("language") || "pt";
  const completionStats = document.getElementById("completionStats");
  const completionMessage = document.getElementById("completionMessage");
  const completionLink = document.getElementById("completionLink");

  if (completionMessage) {
    completionMessage.innerHTML = translations[lang].completionMessage;
  }

  if (completionStats) {
    const skippedInfo = [];
    if (skippedShortBreaks > 0) skippedInfo.push(`${skippedShortBreaks} curtas`);
    if (skippedLongBreaks > 0) skippedInfo.push(`${skippedLongBreaks} longas`);
    const skippedText = skippedInfo.length > 0 ? ` (${skippedInfo.join(", ")})` : "";
    let blockText = `${blockCount}`;
    if (incompleteUnits > 0) {
      blockText += ` (+${incompleteUnits} unidades incompletas)`;
    }

    completionStats.innerHTML = `
      <div class="stat-item">⏱️ <strong>${translations[lang].completionStats.split('\n')[1].split(':')[0]}:</strong> ${Math.floor(totalTimeSeconds / 60)} minutos (trabalho + pausas)</div>
      <div class="stat-item">🔄 <strong>${translations[lang].completionStats.split('\n')[2].split(':')[0]}:</strong> ${blockText} (25 min cada)</div>
      <div class="stat-item">☕ <strong>${translations[lang].completionStats.split('\n')[3].split(':')[0]}:</strong> ${shortBreaks} (5 min após cada bloco)</div>
      <div class="stat-item">🌴 <strong>${translations[lang].completionStats.split('\n')[4].split(':')[0]}:</strong> ${longBreaks} (15-30 min a cada 4 blocos)</div>
      <div class="stat-item">⏭️ <strong>${translations[lang].completionStats.split('\n')[5].split(':')[0]}:</strong> ${skippedBreaks}${skippedText}</div>
      <div class="stat-item">✅ <strong>${translations[lang].completionStats.split('\n')[6].split(':')[0]}:</strong> ${completedTasks} (finalizadas)</div>
    `;
  }

  if (completionLink) {
    completionLink.style.display = "none";
  }

  updateSessionStats();
}

function updateCompletionChart() {
  const completed = tasks.filter(t => t.completed).length;
  const total = tasks.length;
  const percentage = total ? (completed / total) * 100 : 0;
  const canvas = document.getElementById("completionChart");
  const ctx = canvas.getContext("2d");
  canvas.width = 200;
  canvas.height = 200;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(100, 100, 80, 0, 2 * Math.PI);
  ctx.strokeStyle = "rgba(0, 171, 228, 0.2)";
  ctx.lineWidth = 10;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(100, 100, 80, -Math.PI / 2, (-Math.PI / 2) + (percentage / 100) * 2 * Math.PI);
  ctx.strokeStyle = "var(--accent-color)";
  ctx.lineWidth = 10;
  ctx.stroke();

  if (percentage === 100) {
    ctx.beginPath();
    ctx.arc(100, 100, 80, 0, 2 * Math.PI);
    ctx.fillStyle = "rgba(0, 171, 228, 0.3)";
    ctx.fill();
    ctx.font = "bold 24px Poppins";
    ctx.fillStyle = "var(--highlight-color)";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("100%", 100, 100);
  }
}

// Função de notificação
function sendNotification(title, body) {
  if (!("Notification" in window)) {
    console.log("Este navegador não suporta notificações.");
    return;
  }

  if (Notification.permission === "granted") {
    new Notification(title, {
      body: body,
      icon: "assets/logo.png",
      tag: "pomodoro-pause",
      requireInteraction: true
    });
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        sendNotification(title, body);
      }
    });
  }
}

// Modal para Compartilhamento
function shareCompletion() {
  const lang = localStorage.getItem("language") || "pt";
  const modalContent = document.querySelector("#completionModal .modal-content");
  const buttons = modalContent.querySelectorAll("button");
  const linkElement = document.getElementById("completionLink");
  const closeModal = modalContent.querySelector(".close-modal");

  buttons.forEach(button => (button.style.display = "none"));
  if (linkElement) linkElement.style.display = "none";
  if (closeModal) closeModal.style.display = "none";

  modalContent.classList.add("exporting");

  setTimeout(() => {
    html2canvas(modalContent, {
      useCORS: true,
      backgroundColor: getComputedStyle(modalContent).backgroundColor,
      scale: window.devicePixelRatio * 1.5,
    })
      .then(canvas => {
        modalContent.classList.remove("exporting");
        buttons.forEach(button => (button.style.display = ""));
        if (closeModal) closeModal.style.display = "";

        canvas.toBlob(blob => {
          const file = new File([blob], "pomodoro_completion.png", { type: "image/png" });
          const shareText = `${translations[lang].completionModalTitle} ${translations[lang].completionMessage}`;

          if (navigator.canShare && navigator.canShare({ files: [file] })) {
            navigator
              .share({
                title: translations[lang].completionModalTitle,
                text: shareText,
                files: [file],
              })
              .catch(() => alert(translations[lang].shareNotSupported));
          } else {
            alert(translations[lang].shareNotSupported);
          }
        }, "image/png");
      })
      .catch(err => {
        console.error("Erro ao compartilhar imagem:", err);
        modalContent.classList.remove("exporting");
        buttons.forEach(button => (button.style.display = ""));
        if (closeModal) closeModal.style.display = "";
        alert(translations[lang].shareNotSupported);
      });
  }, 250);
}

// Exporta o modal como PNG
function exportCompletionAsPNG() {
  const modalContent = document.querySelector("#completionModal .modal-content");
  const buttons = modalContent.querySelectorAll("button");
  const linkElement = document.getElementById("completionLink");
  const closeModal = modalContent.querySelector(".close-modal");
  const lang = localStorage.getItem("language") || "pt";

  buttons.forEach(button => (button.style.display = "none"));
  if (linkElement) linkElement.style.display = "none";
  if (closeModal) closeModal.style.display = "none";

  modalContent.classList.add("exporting");

  setTimeout(() => {
    html2canvas(modalContent, {
      useCORS: true,
      backgroundColor: getComputedStyle(modalContent).backgroundColor,
      scale: window.devicePixelRatio * 1.5,
      logging: false,
    })
      .then(canvas => {
        modalContent.classList.remove("exporting");
        buttons.forEach(button => (button.style.display = ""));
        if (linkElement) linkElement.style.display = "none";
        if (closeModal) closeModal.style.display = "";

        canvas.toBlob(blob => {
          const link = document.createElement("a");
          link.download = "pomodoro_completion.png";
          link.href = URL.createObjectURL(blob);
          link.click();
          URL.revokeObjectURL(link.href);
        }, "image/png");
      })
      .catch(err => {
        console.error("Erro ao exportar imagem:", err);
        modalContent.classList.remove("exporting");
        alert(translations[lang].shareNotSupported);
      });
  }, 250);
}

function showError(message) {
  const errorModal = document.getElementById("errorModal");
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.textContent = message;
  errorModal.classList.add("active");
  
  const closeErrorModal = () => {
    errorModal.classList.remove("active");
    document.getElementById("taskStart").disabled = false;
    document.getElementById("taskEnd").disabled = false;
    document.getElementById("longBreakDuration").disabled = false;
    document.getElementById("setSchedule").style.display = "inline-block";
    document.getElementById("updateSchedule").style.display = "none";
    document.getElementById("setLongBreak").style.display = "inline-block";
    document.getElementById("updateLongBreak").style.display = "none";
    document.getElementById("startPomodoro").style.display = "inline-block";
    document.querySelector(".long-break-config").style.display = "none";
    isScheduleSet = false;
    isLongBreakSet = false;
    schedule.startTime = null;
    schedule.endTime = null;
    saveSchedule();
    toggleSections();
  };

  document.getElementById("closeErrorButton").onclick = closeErrorModal;
  document.getElementById("closeErrorModal").onclick = closeErrorModal;
}

function calculatePomodoroSessions() {
  if (!schedule.startTime || !schedule.endTime) return 1;
  const [startHours, startMinutes] = schedule.startTime.split(":").map(Number);
  const [endHours, endMinutes] = schedule.endTime.split(":").map(Number);
  const start = new Date();
  start.setHours(startHours, startMinutes, 0, 0);
  const end = new Date();
  end.setHours(endHours, endMinutes, 0, 0);
  if (end <= start) return 1;
  const diffMs = end - start;
  const diffSeconds = Math.floor(diffMs / 1000);
  const sessionDuration = 25 * 60 + 5 * 60;
  const longBreakSession = 25 * 60 + longBreakDuration * 60;
  const fullCycleDuration = 3 * sessionDuration + longBreakSession;
  const totalCycles = Math.floor(diffSeconds / fullCycleDuration);
  const remainingTime = diffSeconds % fullCycleDuration;
  let additionalSessions = 0;
  let remaining = remainingTime;
  while (remaining >= 25 * 60) {
    additionalSessions++;
    remaining -= (additionalSessions % 4 === 0 ? longBreakSession : sessionDuration);
  }
  return (totalCycles * 4) + additionalSessions;
}

// ========== FUNÇÕES DE IDIOMA E UI ==========
function getBrowserLang() {
  const lang = navigator.language.split("-")[0];
  return translations[lang] ? lang : "pt";
}

function setLanguage(lang) {
  try {
    localStorage.setItem("language", lang);
    
    document.title = translations[lang].title;
    
    function safeSetText(id, text) {
      const element = document.getElementById(id);
      if (element && typeof element.textContent !== 'undefined') {
        element.textContent = text;
      }
    }
    
    function safeSetPlaceholder(id, text) {
      const element = document.getElementById(id);
      if (element) element.placeholder = text;
    }

    const h1Title = document.querySelector('h1#title');
    if (h1Title) {
      h1Title.textContent = translations[lang].title;
    }

    safeSetText('subtitle', translations[lang].subtitle);
    safeSetPlaceholder('taskName', translations[lang].taskPlaceholder);
    safeSetText('addTask', translations[lang].addTask);
    safeSetText('startTimeLabel', translations[lang].startTimeTitle);
    safeSetText('endTimeLabel', translations[lang].endTimeTitle);
    safeSetText('setSchedule', translations[lang].setSchedule);
    safeSetText('updateSchedule', translations[lang].updateSchedule);
    safeSetText('longBreakLabel', translations[lang].longBreakLabel);
    safeSetText('setLongBreak', translations[lang].setLongBreak);
    safeSetText('updateLongBreak', translations[lang].updateLongBreak);
    safeSetText('startPomodoro', translations[lang].startPomodoro);
    safeSetText('progressTitle', translations[lang].progressTitle);
    safeSetText('editModalTitle', translations[lang].editModalTitle);
    safeSetText('saveEdit', translations[lang].saveEdit);
    safeSetText('cancelEdit', translations[lang].cancelEdit);
    safeSetText('confirmModalTitle', translations[lang].confirmModalTitle);
    safeSetText('confirmModalText', translations[lang].confirmModalText);
    safeSetText('confirmYes', translations[lang].confirmYes);
    safeSetText('confirmNo', translations[lang].confirmNo);
    safeSetText('progressConfirmModalTitle', translations[lang].progressConfirmModalTitle);
    safeSetText('progressConfirmModalText', translations[lang].progressConfirmModalText);
    safeSetText('progressConfirmYes', translations[lang].progressConfirmYes);
    safeSetText('progressConfirmNo', translations[lang].progressConfirmNo);
    safeSetText('skipPause', translations[lang].skipPause);
    safeSetText('updateScheduleFromModal', translations[lang].updateScheduleFromModal);
    safeSetText('pomodoroInfoTitle', translations[lang].pomodoroInfoTitle);
    safeSetText('pomodoroInfoText', translations[lang].pomodoroInfoText);
    safeSetText('closeModal', translations[lang].closeModal);
    safeSetText('completionModalTitle', translations[lang].completionModalTitle);
    safeSetText('completionMessage', translations[lang].completionMessage);
    safeSetText('closeCompletion', translations[lang].closeCompletion);
    safeSetText('exportCompletion', translations[lang].exportCompletion);
    safeSetText('shareCompletion', translations[lang].shareCompletion);
    safeSetText('resetSystem', translations[lang].resetSystem);
    safeSetText('closeErrorButton', translations[lang].closeErrorButton);
    safeSetText('pauseButton', translations[lang].pauseButton);
    safeSetText('restartButton', translations[lang].restartButton);

    const errorModalTitle = document.querySelector("#errorModal h2");
    if (errorModalTitle) {
      errorModalTitle.textContent = translations[lang].errorModalTitle;
    }

    const footerText = document.querySelector("footer p:not(.copyright)");
    if (footerText) {
      footerText.textContent = translations[lang].footerText;
    }

    const copyright = document.querySelector("footer p.copyright");
    if (copyright) {
      copyright.textContent = translations[lang].copyright;
    }

    const longBreakSelect = document.getElementById("longBreakDuration");
    if (longBreakSelect) {
      longBreakSelect.innerHTML = "";
      Object.entries(translations[lang].longBreakOptions).forEach(([value, text]) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = text;
        longBreakSelect.appendChild(option);
      });
      longBreakSelect.value = localStorage.getItem("longBreakDuration") || 15;
    }

    const longBreakInfo = document.querySelector(".long-break-info");
    if (longBreakInfo) {
      longBreakInfo.textContent = translations[lang].longBreakSuggestion;
    }

    renderTasks();
    updateCompletionModal();
    updateProgress();
    
  } catch (error) {
    console.error('Erro ao definir idioma:', error);
  }
}

function updateProgress() {
  const completed = tasks.filter(t => t.completed).length;
  const total = tasks.length;
  const percentage = total ? (completed / total) * 100 : 0;
  const canvas = document.getElementById("progressChart");
  const ctx = canvas.getContext("2d");
  canvas.width = 200;
  canvas.height = 200;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(100, 100, 80, 0, 2 * Math.PI);
  ctx.strokeStyle = "rgba(0, 171, 228, 0.2)";
  ctx.lineWidth = 10;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(100, 100, 80, -Math.PI / 2, (-Math.PI / 2) + (percentage / 100) * 2 * Math.PI);
  ctx.strokeStyle = "var(--accent-color)";
  ctx.lineWidth = 10;
  ctx.stroke();

  const lang = localStorage.getItem("language") || "pt";
  if (percentage === 100) {
    document.getElementById("progressMessage").textContent = translations[lang].completionMessage;
    openCompletionModal();
  } else {
    document.getElementById("progressMessage").textContent = "";
  }
}

function handleAddTask() {
  const taskInput = document.getElementById("taskName");
  const name = taskInput.value.trim();
  const lang = localStorage.getItem("language") || "pt";
  
  if (name) {
    addTask(name);
    taskInput.value = "";
    taskInput.focus();
  } else {
    alert(translations[lang].taskPlaceholder);
  }
}

function toggleSections() {
  const taskList = document.querySelector(".task-list");
  const scheduleInput = document.querySelector(".schedule-input");
  const longBreakConfig = document.querySelector(".long-break-config");
  const longBreakInfo = document.querySelector(".long-break-info");
  const pomodoroControl = document.querySelector(".pomodoro-control");
  const taskStart = document.getElementById("taskStart");
  const taskEnd = document.getElementById("taskEnd");
  const setSchedule = document.getElementById("setSchedule");
  const updateSchedule = document.getElementById("updateSchedule");
  const setLongBreak = document.getElementById("setLongBreak");
  const updateLongBreak = document.getElementById("updateLongBreak");
  const startPomodoro = document.getElementById("startPomodoro");
  const pomodoro = document.querySelector(".pomodoro");
  const progress = document.querySelector(".progress");
  const longBreakSelect = document.getElementById("longBreakDuration");
  const pauseButton = document.getElementById("pauseButton");
  const restartButton = document.getElementById("restartButton");

  if (tasks.length > 0) {
    taskList.classList.add("active");
    scheduleInput.classList.add("active");
  } else {
    taskList.classList.remove("active");
    scheduleInput.classList.remove("active");
    longBreakConfig.style.display = "none";
    longBreakInfo.style.display = "none";
    pomodoroControl.classList.remove("active");
    pomodoro.classList.remove("active");
    progress.classList.remove("active");
    isScheduleSet = false;
    isLongBreakSet = false;
    isPomodoroActive = false;
    schedule.startTime = null;
    schedule.endTime = null;
    saveSchedule();
  }

  if (isScheduleSet && tasks.length > 0 && !isLongBreakSet && !currentTaskId) {
    taskStart.disabled = true;
    taskEnd.disabled = true;
    setSchedule.style.display = "none";
    updateSchedule.style.display = "inline-block";
    longBreakConfig.style.display = "flex";
    longBreakInfo.style.display = "block";
    longBreakConfig.classList.add("active");
    setLongBreak.style.display = "inline-block";
    updateLongBreak.style.display = "none";
    startPomodoro.style.display = "none";
    pomodoroControl.classList.add("active");
    pomodoro.classList.remove("active");
    progress.classList.remove("active");
    if (pauseButton) pauseButton.style.display = "none";
    if (restartButton) restartButton.style.display = "none";
  } else if (isScheduleSet && isLongBreakSet && tasks.length > 0 && !currentTaskId) {
    taskStart.disabled = true;
    taskEnd.disabled = true;
    longBreakSelect.disabled = true;
    setSchedule.style.display = "none";
    updateSchedule.style.display = "inline-block";
    longBreakConfig.style.display = "flex";
    longBreakInfo.style.display = "block";
    longBreakConfig.classList.add("active");
    setLongBreak.style.display = "none";
    updateLongBreak.style.display = "inline-block";
    startPomodoro.style.display = "inline-block";
    pomodoroControl.classList.add("active");
    pomodoro.classList.remove("active");
    progress.classList.remove("active");
    if (pauseButton) pauseButton.style.display = "none";
    if (restartButton) restartButton.style.display = "none";
  } else if (currentTaskId && tasks.length > 0) {
    taskStart.disabled = true;
    taskEnd.disabled = true;
    longBreakSelect.disabled = true;
    setSchedule.style.display = "none";
    updateSchedule.style.display = "none";
    longBreakConfig.style.display = "flex";
    longBreakInfo.style.display = "block";
    longBreakConfig.classList.add("active");
    setLongBreak.style.display = "none";
    updateLongBreak.style.display = "none";
    startPomodoro.style.display = "none";
    pomodoroControl.classList.add("active");
    
    if (isPomodoroActive) {
      pomodoro.classList.add("active");
      progress.classList.add("active");
      if (pauseButton) pauseButton.style.display = "inline-block";
      if (restartButton) restartButton.style.display = "inline-block";
    } else {
      pomodoro.classList.remove("active");
      progress.classList.remove("active");
      if (pauseButton) pauseButton.style.display = "none";
      if (restartButton) restartButton.style.display = "none";
    }
  } else {
    taskStart.disabled = false;
    taskEnd.disabled = false;
    longBreakSelect.disabled = false;
    setSchedule.style.display = "inline-block";
    updateSchedule.style.display = "none";
    longBreakConfig.style.display = "none";
    longBreakInfo.style.display = "none";
    pomodoroControl.classList.remove("active");
    setLongBreak.style.display = "none";
    updateLongBreak.style.display = "none";
    startPomodoro.style.display = "none";
    pomodoro.classList.remove("active");
    progress.classList.remove("active");
    if (pauseButton) pauseButton.style.display = "none";
    if (restartButton) restartButton.style.display = "none";
  }

  renderTasks();
  updateProgress();
}

// ========== INICIALIZAÇÃO CORRIGIDA ==========
document.addEventListener("DOMContentLoaded", () => {
  setInitialTheme();
  document.getElementById("themeToggle").addEventListener("change", toggleTheme);
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", handleSystemThemeChange);

  // Solicita permissão de notificação
  if ("Notification" in window && Notification.permission === "default") {
    Notification.requestPermission();
  }

  const savedLang = localStorage.getItem("language") || getBrowserLang();
  document.getElementById("languageSelect").value = savedLang;
  setLanguage(savedLang);
  document.getElementById("languageSelect").addEventListener("change", e => setLanguage(e.target.value));

  document.getElementById("longBreakDuration").value = longBreakDuration;
  document.getElementById("longBreakDuration").addEventListener("change", e => {
    longBreakDuration = parseInt(e.target.value);
    localStorage.setItem("longBreakDuration", longBreakDuration);
  });

  // Tenta recuperar o timer salvo
  const timerRecovered = recoverTimerState();
  
  // Event listeners usando event delegation
  document.addEventListener('click', (e) => {
    if (e.target.id === 'pauseButton') togglePause();
    if (e.target.id === 'restartButton') restartPomodoro();
    if (e.target.id === 'addTask') handleAddTask();
  });

  document.getElementById("taskName").addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleAddTask();
  });

  // Restante dos event listeners (mantidos do original)...
  document.getElementById("setSchedule").addEventListener("click", () => {
    const startTime = document.getElementById("taskStart").value;
    const endTime = document.getElementById("taskEnd").value;
    const lang = localStorage.getItem("language") || "pt";
    if (startTime && endTime) {
      const [startHours, startMinutes] = startTime.split(":").map(Number);
      const [endHours, endMinutes] = endTime.split(":").map(Number);
      const start = new Date();
      start.setHours(startHours, startMinutes, 0, 0);
      const end = new Date();
      end.setHours(endHours, endMinutes, 0, 0);
      if (end <= start) {
        document.getElementById("errorMessage").textContent = `${translations[lang].endTimeTitle} deve ser posterior a ${translations[lang].startTimeTitle}!`;
        document.getElementById("errorModal").classList.add("active");
        const closeErrorModal = () => {
          document.getElementById("errorModal").classList.remove("active");
        };
        document.getElementById("closeErrorButton").onclick = closeErrorModal;
        document.getElementById("closeErrorModal").onclick = closeErrorModal;
        return;
      }
      schedule = { startTime, endTime };
      isScheduleSet = true;
      saveSchedule();
      toggleSections();
    } else {
      document.getElementById("errorMessage").textContent = "Por favor, defina o horário de início e fim.";
      document.getElementById("errorModal").classList.add("active");
      const closeErrorModal = () => {
        document.getElementById("errorModal").classList.remove("active");
      };
      document.getElementById("closeErrorButton").onclick = closeErrorModal;
      document.getElementById("closeErrorModal").onclick = closeErrorModal;
    }
  });

  document.getElementById("updateSchedule").addEventListener("click", () => {
    document.getElementById("taskStart").disabled = false;
    document.getElementById("taskEnd").disabled = false;
    document.getElementById("longBreakDuration").disabled = false;
    document.getElementById("setSchedule").style.display = "inline-block";
    document.getElementById("updateSchedule").style.display = "none";
    document.getElementById("setLongBreak").style.display = "inline-block";
    document.getElementById("updateLongBreak").style.display = "none";
    document.getElementById("startPomodoro").style.display = "inline-block";
    document.querySelector(".long-break-config").style.display = "none";
    isScheduleSet = false;
    isLongBreakSet = false;
    isPomodoroActive = false;
    schedule.startTime = null;
    schedule.endTime = null;
    saveSchedule();
    toggleSections();
  });

  document.getElementById("setLongBreak").addEventListener("click", () => {
    const longBreak = document.getElementById("longBreakDuration").value;
    const lang = localStorage.getItem("language") || "pt";
    if (longBreak) {
      longBreakDuration = parseInt(longBreak);
      localStorage.setItem("longBreakDuration", longBreakDuration);
      isLongBreakSet = true;
      toggleSections();
    } else {
      document.getElementById("errorMessage").textContent = "Por favor, selecione uma duração para a pausa longa.";
      document.getElementById("errorModal").classList.add("active");
      const closeErrorModal = () => {
        document.getElementById("errorModal").classList.remove("active");
      };
      document.getElementById("closeErrorButton").onclick = closeErrorModal;
      document.getElementById("closeErrorModal").onclick = closeErrorModal;
    }
  });

  document.getElementById("updateLongBreak").addEventListener("click", () => {
    document.getElementById("longBreakDuration").disabled = false;
    document.getElementById("setLongBreak").style.display = "inline-block";
    document.getElementById("updateLongBreak").style.display = "none";
    document.getElementById("startPomodoro").style.display = "inline-block";
    isLongBreakSet = false;
    toggleSections();
  });

  document.getElementById("updateScheduleFromModal").addEventListener("click", () => {
    clearInterval(startTimerInterval);
    document.getElementById("startTimerModal").classList.remove("active");
    document.getElementById("taskStart").disabled = false;
    document.getElementById("taskEnd").disabled = false;
    document.getElementById("longBreakDuration").disabled = false;
    document.getElementById("setSchedule").style.display = "inline-block";
    document.getElementById("updateSchedule").style.display = "none";
    document.getElementById("setLongBreak").style.display = "inline-block";
    document.getElementById("updateLongBreak").style.display = "none";
    document.getElementById("startPomodoro").style.display = "inline-block";
    document.querySelector(".long-break-config").style.display = "none";
    isScheduleSet = false;
    isLongBreakSet = false;
    isPomodoroActive = false;
    schedule.startTime = null;
    schedule.endTime = null;
    saveSchedule();
    toggleSections();
  });

  document.getElementById("startPomodoro").addEventListener("click", () => {
    const lang = localStorage.getItem("language") || "pt";
    const errorModal = document.getElementById("errorModal");
    const errorMessage = document.getElementById("errorMessage");
    const closeErrorModal = () => {
      errorModal.classList.remove("active");
      document.getElementById("taskStart").disabled = false;
      document.getElementById("taskEnd").disabled = false;
      document.getElementById("longBreakDuration").disabled = false;
      document.getElementById("setSchedule").style.display = "inline-block";
      document.getElementById("updateSchedule").style.display = "none";
      document.getElementById("setLongBreak").style.display = "inline-block";
      document.getElementById("updateLongBreak").style.display = "none";
      document.getElementById("startPomodoro").style.display = "inline-block";
      document.querySelector(".long-break-config").style.display = "none";
      isScheduleSet = false;
      isLongBreakSet = false;
      schedule.startTime = null;
      schedule.endTime = null;
      saveSchedule();
      toggleSections();
    };

    if (!isScheduleSet || !isLongBreakSet) {
      errorMessage.textContent = translations[lang].noSchedule;
      errorModal.classList.add("active");
      document.getElementById("closeErrorButton").onclick = closeErrorModal;
      document.getElementById("closeErrorModal").onclick = closeErrorModal;
      return;
    }
    const nextTask = tasks.find(t => !t.completed);
    if (nextTask) {
      startPomodoro(nextTask.id);
    } else {
      errorMessage.textContent = translations[lang].noTasks;
      errorModal.classList.add("active");
      document.getElementById("closeErrorButton").onclick = closeErrorModal;
      document.getElementById("closeErrorModal").onclick = closeErrorModal;
    }
  });

  document.getElementById("cancelEdit").addEventListener("click", closeEditModal);
  document.getElementById("closeModal").addEventListener("click", closePomodoroInfoModal);
  document.getElementById("closeCompletion").addEventListener("click", closeCompletionModal);
  document.getElementById("exportCompletion").addEventListener("click", exportCompletionAsPNG);
  document.getElementById("shareCompletion").addEventListener("click", shareCompletion);
  document.getElementById("resetSystem").addEventListener("click", resetSystem);
  document.querySelector(".info-icon").addEventListener("click", openPomodoroInfoModal);

  renderTasks();
  toggleSections();
  
  // Se não recuperou um timer, inicia normalmente
  if (!timerRecovered) {
    console.log("⏰ Inicializando sem timer recuperado");
  }
});

// Cleanup quando a página for fechada/recarregada
window.addEventListener('beforeunload', () => {
  stopMainTimer();
  if (startTimerInterval) clearInterval(startTimerInterval);
});