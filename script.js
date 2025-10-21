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

// Gestão de Idiomas
const translations = {
  pt: {
    title: "TaskDayPomodoro",
    subtitle: "Organize seu tempo",
    addTask: "Adicionar Tarefa",
    taskPlaceholder: "Digite o nome da tarefa",
    startTimeTitle: "Início",
    endTimeTitle: "Fim",
    setSchedule: "Definir Horário",
    updateSchedule: "Atualizar Horário",
    longBreakLabel: "Duração da pausa longa:",
    setLongBreak: "Definir Pausa",
    updateLongBreak: "Atualizar Pausa",
    startPomodoro: "Iniciar Tarefa",
    edit: "Editar",
    delete: "Excluir",
    currentTask: "Tarefa atual: ",
    sessionStats: "Sessões: {0} | Pausas curtas: {1} | Pausas longas: {2} | Pausas puladas: {3} | Tarefas concluídas: {4}",
    progressTitle: "Progresso",
    congrats: "Parabéns! Todas as tarefas foram concluídas!",
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
    pauseMessage: "Hora de uma pausa! Descanse por {0} minutos.",
    nextTaskMessage: "Tarefa concluída! Pausa de transição de ",
    pauseMessages: [
      "Aproveite para tomar uma água!",
      "Que tal alongar um pouco?",
      "Respire fundo e relaxe!",
      "Dê uma olhada pela janela!",
    ],
    skipPause: "Pular Pausa",
    startTimerMessage: "O Pomodoro começará às ",
    updateScheduleFromModal: "Atualizar Horário",
    pomodoroInfoTitle: "Como funciona o Pomodoro?",
    pomodoroInfoText: "A técnica Pomodoro divide o trabalho em blocos de 25 minutos, seguidos por pausas curtas de 5 minutos. A cada 4 blocos, há uma pausa longa (15-30 minutos). Quando uma tarefa é concluída, há uma pausa de transição de 3 minutos antes da próxima tarefa. Referências: https://pt.wikipedia.org/wiki/T%C3%A9cnica_pomodoro.",
    closeModal: "x",
    completionModalTitle: "Parabéns!🎆",
    completionStats: "Tempo total: {0} minutos\nSessões: {1}\nPausas curtas: {2}\nPausas longas: {3}\nPausas puladas: {4}\nTarefas concluídas: {5}",
    closeCompletion: "Fechar",
    exportCompletion: "Exportar como PNG",
    resetSystem: "Reiniciar Sistema",
    noTasks: "Não há tarefas para iniciar!",
    longBreakSuggestion: "Sugerimos que para tarefas simples, use 15 minutos; para tarefas complexas, use 30 minutos.",
    longBreakOptions: {
      15: "15 minutos",
      20: "20 minutos",
      25: "25 minutos",
      30: "30 minutos"
    },
    footerText: "Feito por Juan Ibañez com ❤️ para produtividade!",
    copyright: "© Todos os direitos reservados 2025."
  },
  en: {
    title: "TaskDayPomodoro",
    subtitle: "Organize your time",
    addTask: "Add Task",
    taskPlaceholder: "Enter task name",
    startTimeTitle: "Start",
    endTimeTitle: "End",
    setSchedule: "Set Schedule",
    updateSchedule: "Update Schedule",
    longBreakLabel: "Long break duration:",
    setLongBreak: "Set Break",
    updateLongBreak: "Update Break",
    startPomodoro: "Start Task",
    edit: "Edit",
    delete: "Delete",
    currentTask: "Current task: ",
    sessionStats: "Sessions: {0} | Short breaks: {1} | Long breaks: {2} | Skipped breaks: {3} | Completed tasks: {4}",
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
    pauseMessage: "Time for a break! Rest for {0} minutes.",
    nextTaskMessage: "Task completed! Transition break of ",
    pauseMessages: [
      "Take a moment to drink some water!",
      "How about a quick stretch?",
      "Breathe deeply and relax!",
      "Look out the window for a bit!",
    ],
    skipPause: "Skip Break",
    startTimerMessage: "The Pomodoro will start at ",
    updateScheduleFromModal: "Update Schedule",
    pomodoroInfoTitle: "How does Pomodoro work?",
    pomodoroInfoText: "The Pomodoro technique divides work into 25-minute blocks, followed by 5-minute short breaks. Every 4 blocks, there's a long break (15-30 minutes). When a task is completed, there's a 3-minute transition break before the next task. References: https://pt.wikipedia.org/wiki/T%C3%A9cnica_pomodoro.",
    closeModal: "x",
    completionModalTitle: "Congratulations!🎆",
    completionStats: "Total time: {0} minutes\nSessions: {1}\nShort breaks: {2}\nLong breaks: {3}\nSkipped breaks: {4}\nCompleted tasks: {5}",
    closeCompletion: "Close",
    exportCompletion: "Export as PNG",
    resetSystem: "Reset System",
    noTasks: "No tasks to start!",
    longBreakSuggestion: "We suggest using 15 minutes for simple tasks and 30 minutes for complex tasks.",
    longBreakOptions: {
      15: "15 minutes",
      20: "20 minutes",
      25: "25 minutes",
      30: "30 minutes"
    },
    footerText: "Made by Juan Ibañez with ❤️ for productivity!",
    copyright: "© All rights reserved 2025."
  },
  es: {
    title: "TaskDayPomodoro",
    subtitle: "¡Organiza tu tiempo!",
    addTask: "Agregar Tarea",
    taskPlaceholder: "Ingresa el nombre de la tarea",
    startTimeTitle: "Inicio",
    endTimeTitle: "Fin",
    setSchedule: "Establecer Horario",
    updateSchedule: "Actualizar Horario",
    longBreakLabel: "Duración del descanso largo:",
    setLongBreak: "Establecer Descanso",
    updateLongBreak: "Actualizar Descanso",
    startPomodoro: "Iniciar Tarea",
    edit: "Editar",
    delete: "Eliminar",
    currentTask: "Tarea actual: ",
    sessionStats: "Sesiones: {0} | Descansos cortos: {1} | Descansos largos: {2} | Descansos saltados: {3} | Tareas completadas: {4}",
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
    pauseMessage: "¡Hora de un descanso! Descansa por {0} minutos.",
    nextTaskMessage: "¡Tarea completada! Descanso de transición de ",
    pauseMessages: [
      "¡Aprovecha para tomar un poco de agua!",
      "¿Qué tal un estiramiento rápido?",
      "¡Respira profundamente y relájate!",
      "¡Mira por la ventana un momento!",
    ],
    skipPause: "Saltar Descanso",
    startTimerMessage: "El Pomodoro comenzará a las ",
    updateScheduleFromModal: "Actualizar Horario",
    pomodoroInfoTitle: "¿Cómo funciona el Pomodoro?",
    pomodoroInfoText: "La técnica Pomodoro divide el trabajo en bloques de 25 minutos, seguidos de descansos cortos de 5 minutos. Cada 4 bloques, hay un descanso largo (15-30 minutos). Cuando se completa una tarea, hay un descanso de transición de 3 minutos antes de la siguiente tarea. Referencias: https://pt.wikipedia.org/wiki/T%C3%A9cnica_pomodoro.",
    closeModal: "x",
    completionModalTitle: "¡Felicidades!🎆",
    completionStats: "Tiempo total: {0} minutos\nSesiones: {1}\nDescansos cortos: {2}\nDescansos largos: {3}\nDescansos saltados: {4}\nTareas completadas: {5}",
    closeCompletion: "Cerrar",
    exportCompletion: "Exportar como PNG",
    resetSystem: "Reiniciar Sistema",
    noTasks: "¡No hay tareas para iniciar!",
    longBreakSuggestion: "Sugerimos usar 15 minutos para tareas simples y 30 minutos para tareas complejas.",
    longBreakOptions: {
      15: "15 minutos",
      20: "20 minutos",
      25: "25 minutos",
      30: "30 minutos"
    },
    footerText: "¡Hecho por Juan Ibañez con ❤️ para la productividad!",
    copyright: "© Todos los derechos reservados 2025."
  }
};

function getBrowserLang() {
  const lang = navigator.language.split("-")[0];
  return translations[lang] ? lang : "pt";
}

function setLanguage(lang) {
  localStorage.setItem("language", lang);
  document.getElementById("title").textContent = translations[lang].title;
  document.getElementById("subtitle").textContent = translations[lang].subtitle;
  document.getElementById("taskName").placeholder = translations[lang].taskPlaceholder;
  document.getElementById("addTask").textContent = translations[lang].addTask;
  document.getElementById("startTimeLabel").textContent = translations[lang].startTimeTitle;
  document.getElementById("endTimeLabel").textContent = translations[lang].endTimeTitle;
  document.getElementById("setSchedule").textContent = translations[lang].setSchedule;
  document.getElementById("updateSchedule").textContent = translations[lang].updateSchedule;
  document.getElementById("longBreakLabel").textContent = translations[lang].longBreakLabel;
  document.getElementById("setLongBreak").textContent = translations[lang].setLongBreak;
  document.getElementById("updateLongBreak").textContent = translations[lang].updateLongBreak;
  document.getElementById("startPomodoro").textContent = translations[lang].startPomodoro;
  document.getElementById("progressTitle").textContent = translations[lang].progressTitle;
  document.getElementById("editModalTitle").textContent = translations[lang].editModalTitle;
  document.getElementById("saveEdit").textContent = translations[lang].saveEdit;
  document.getElementById("cancelEdit").textContent = translations[lang].cancelEdit;
  document.getElementById("confirmModalTitle").textContent = translations[lang].confirmModalTitle;
  document.getElementById("confirmModalText").textContent = translations[lang].confirmModalText;
  document.getElementById("confirmYes").textContent = translations[lang].confirmYes;
  document.getElementById("confirmNo").textContent = translations[lang].confirmNo;
  document.getElementById("progressConfirmModalTitle").textContent = translations[lang].progressConfirmModalTitle;
  document.getElementById("progressConfirmModalText").textContent = translations[lang].progressConfirmModalText;
  document.getElementById("progressConfirmYes").textContent = translations[lang].progressConfirmYes;
  document.getElementById("progressConfirmNo").textContent = translations[lang].progressConfirmNo;
  document.getElementById("skipPause").textContent = translations[lang].skipPause;
  document.getElementById("updateScheduleFromModal").textContent = translations[lang].updateScheduleFromModal;
  document.getElementById("pomodoroInfoTitle").textContent = translations[lang].pomodoroInfoTitle;
  document.getElementById("pomodoroInfoText").textContent = translations[lang].pomodoroInfoText;
  document.getElementById("closeModal").textContent = translations[lang].closeModal;
  document.getElementById("completionModalTitle").textContent = translations[lang].completionModalTitle;
  document.getElementById("closeCompletion").textContent = translations[lang].closeCompletion;
  document.getElementById("exportCompletion").textContent = translations[lang].exportCompletion;
  document.getElementById("resetSystem").textContent = translations[lang].resetSystem;
  // Adicionar traduções para o footer
  document.querySelector("footer p:not(.copyright)").textContent = translations[lang].footerText;
  document.querySelector("footer p.copyright").textContent = translations[lang].copyright;

  const longBreakSelect = document.getElementById("longBreakDuration");
  longBreakSelect.innerHTML = "";
  Object.entries(translations[lang].longBreakOptions).forEach(([value, text]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = text;
    longBreakSelect.appendChild(option);
  });
  longBreakSelect.value = localStorage.getItem("longBreakDuration") || 15;

  const longBreakInfo = document.querySelector(".long-break-info");
  if (longBreakInfo) {
    longBreakInfo.textContent = translations[lang].longBreakSuggestion;
  }

  renderTasks();
  updateCompletionModal();
  updateProgress();
}

// CRUD de Tarefas
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let schedule = JSON.parse(localStorage.getItem("schedule")) || { startTime: null, endTime: null };
let isScheduleSet = false;
let isLongBreakSet = false;
let longBreakDuration = parseInt(localStorage.getItem("longBreakDuration")) || 15;
let startTimerInterval = null;
let isPomodoroActive = false;
let pomodoroStartTime = null;
let totalTimeSeconds = parseInt(localStorage.getItem("totalTimeSeconds")) || 0;
let skippedBreaks = parseInt(localStorage.getItem("skippedBreaks")) || 0;
let pomodoroInterval = null;
let currentTaskId = null;
let isWorking = true;
let timeLeft = 25 * 60;
let sessionCount = 0;
let completedSessions = parseInt(localStorage.getItem("completedSessions")) || 0;
let shortBreaks = parseInt(localStorage.getItem("shortBreaks")) || 0;
let longBreaks = parseInt(localStorage.getItem("longBreaks")) || 0;
let completedTasks = parseInt(localStorage.getItem("completedTasks")) || 0;

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function saveSchedule() {
  localStorage.setItem("schedule", JSON.stringify(schedule));
}

function saveStats() {
  localStorage.setItem("totalTimeSeconds", totalTimeSeconds);
  localStorage.setItem("completedSessions", completedSessions);
  localStorage.setItem("shortBreaks", shortBreaks);
  localStorage.setItem("longBreaks", longBreaks);
  localStorage.setItem("skippedBreaks", skippedBreaks);
  localStorage.setItem("completedTasks", completedTasks);
}

function updateTotalTime() {
  if (isPomodoroActive) {
    totalTimeSeconds++;
    saveStats();
    updateCompletionModal();
  }
}

function toggleTaskComplete(id) {
  tasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
  completedTasks = tasks.filter(task => task.completed).length;
  saveTasks();
  saveStats();
  if (tasks.every(task => task.completed)) {
    isPomodoroActive = false;
    updateTotalTime();
    completedSessions = sessionCount;
    endPomodoro();
    openCompletionModal();
  } else if (currentTaskId && id === currentTaskId) {
    clearInterval(pomodoroInterval);
    startPause(true, true);
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
          <input type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleTaskComplete(${task.id})">
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

// Modal para Edição
function openEditModal(id) {
  const task = tasks.find(t => t.id === id);
  const lang = localStorage.getItem("language") || "pt";
  document.getElementById("editTaskName").value = task.name;
  document.getElementById("editModal").classList.add("active");
  document.getElementById("saveEdit").onclick = () => {
    const newName = document.getElementById("editTaskName").value;
    if (newName) {
      editTask(id, newName);
      document.getElementById("editModal").classList.remove("active");
    } else {
      alert(translations[lang].taskPlaceholder);
    }
  };
}

function closeEditModal() {
  document.getElementById("editModal").classList.remove("active");
}

// Modal para Confirmação de Conclusão
function openConfirmModal(taskId) {
  document.getElementById("confirmModal").classList.add("active");
  document.getElementById("confirmYes").onclick = () => {
    toggleTaskComplete(taskId);
    document.getElementById("confirmModal").classList.remove("active");
  };
  document.getElementById("confirmNo").onclick = () => {
    document.getElementById("confirmModal").classList.remove("active");
    startPause(false);
  };
}

// Modal para Confirmação de Progresso na Pausa
function openProgressConfirmModal(taskId) {
  document.getElementById("progressConfirmModal").classList.add("active");
  document.getElementById("progressConfirmYes").onclick = () => {
    document.getElementById("progressConfirmModal").classList.remove("active");
    startPomodoro(taskId);
  };
  document.getElementById("progressConfirmNo").onclick = () => {
    toggleTaskComplete(taskId);
    document.getElementById("progressConfirmModal").classList.remove("active");
    startPause(true, true);
  };
}

// Modal para Pausa
let pauseInterval = null;

function startPause(switchTask, isTaskComplete = false) {
  const lang = localStorage.getItem("language") || "pt";
  const pauseTime = isTaskComplete ? 3 * 60 : (sessionCount % 4 === 0 ? longBreakDuration * 60 : 5 * 60);
  const pauseMinutes = pauseTime / 60;
  timeLeft = pauseTime;
  const messages = translations[lang].pauseMessages;
  const pauseMessage = switchTask
    ? `${translations[lang].nextTaskMessage}${pauseMinutes} minutos. ${messages[Math.floor(Math.random() * messages.length)]}`
    : `${translations[lang].pauseMessage.replace("{0}", pauseMinutes)} ${messages[Math.floor(Math.random() * messages.length)]}`;
  document.getElementById("pauseMessage").textContent = pauseMessage;
  document.getElementById("pauseModal").classList.add("active");
  updatePauseTimerDisplay();

  pauseInterval = setInterval(() => {
    timeLeft--;
    updateTotalTime();
    updatePauseTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(pauseInterval);
      document.getElementById("pauseModal").classList.remove("active");
      if (!isTaskComplete) {
        if (sessionCount % 4 === 0) {
          longBreaks++;
        } else {
          shortBreaks++;
        }
      }
      updateSessionStats();
      saveStats();
      if (switchTask) {
        const nextTask = tasks.find(t => !t.completed);
        if (nextTask) {
          startPomodoro(nextTask.id);
        } else {
          isPomodoroActive = false;
          updateTotalTime();
          endPomodoro();
          openCompletionModal();
        }
      } else {
        openProgressConfirmModal(currentTaskId);
      }
    }
  }, 1000);

  document.getElementById("skipPause").onclick = () => {
    clearInterval(pauseInterval);
    document.getElementById("pauseModal").classList.remove("active");
    skippedBreaks++;
    updateSessionStats();
    saveStats();
    if (switchTask) {
      const nextTask = tasks.find(t => !t.completed);
      if (nextTask) {
        startPomodoro(nextTask.id);
      } else {
        isPomodoroActive = false;
        updateTotalTime();
        endPomodoro();
        openCompletionModal();
      }
    } else {
      openProgressConfirmModal(currentTaskId);
    }
  };
}

function updatePauseTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById("pauseTimer").textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// Modal para Contagem Regressiva
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

// Modal para Informações do Pomodoro
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
  document.getElementById("sessionStats").textContent = translations[lang].sessionStats
    .replace("{0}", completedSessions)
    .replace("{1}", shortBreaks)
    .replace("{2}", longBreaks)
    .replace("{3}", skippedBreaks)
    .replace("{4}", completedTasks);
}

function updateCompletionModal() {
  const lang = localStorage.getItem("language") || "pt";
  const completionStats = document.getElementById("completionStats");
  if (completionStats) {
    completionStats.innerHTML = translations[lang].completionStats
      .replace("{0}", Math.floor(totalTimeSeconds / 60))
      .replace("{1}", completedSessions)
      .replace("{2}", shortBreaks)
      .replace("{3}", longBreaks)
      .replace("{4}", skippedBreaks)
      .replace("{5}", completedTasks)
      .replace(/\n/g, "<br>");
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

function exportCompletionAsPNG() {
  html2canvas(document.querySelector("#completionModal .modal-content")).then(canvas => {
    const link = document.createElement("a");
    link.download = "pomodoro_completion.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}

function resetSystem() {
  tasks = [];
  schedule = { startTime: null, endTime: null };
  isScheduleSet = false;
  isLongBreakSet = false;
  isPomodoroActive = false;
  pomodoroStartTime = null;
  totalTimeSeconds = 0;
  completedSessions = 0;
  shortBreaks = 0;
  longBreaks = 0;
  skippedBreaks = 0;
  completedTasks = 0;
  sessionCount = 0;
  currentTaskId = null;
  timeLeft = 25 * 60;
  isWorking = true;
  clearInterval(pomodoroInterval);
  clearInterval(startTimerInterval);
  clearInterval(pauseInterval);
  saveTasks();
  saveSchedule();
  saveStats();
  localStorage.removeItem("longBreakDuration");
  document.getElementById("completionModal").classList.remove("active");
  document.getElementById("pauseModal").classList.remove("active");
  document.getElementById("startTimerModal").classList.remove("active");
  document.getElementById("confirmModal").classList.remove("active");
  document.getElementById("progressConfirmModal").classList.remove("active");
  toggleSections();
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
    } else {
      pomodoro.classList.remove("active");
      progress.classList.remove("active");
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
  }

  renderTasks();
  updateProgress();
}

// Pomodoro
function calculatePomodoroSessions() {
  if (!schedule.startTime || !schedule.endTime) return 25 * 60;
  const [startHours, startMinutes] = schedule.startTime.split(":").map(Number);
  const [endHours, endMinutes] = schedule.endTime.split(":").map(Number);
  const start = new Date();
  start.setHours(startHours, startMinutes, 0, 0);
  const end = new Date();
  end.setHours(endHours, endMinutes, 0, 0);
  if (end <= start) return 25 * 60;
  const diffMs = end - start;
  const diffSeconds = Math.floor(diffMs / 1000);
  const sessionDuration = 25 * 60 + 5 * 60;
  const longBreakSession = 25 * 60 + longBreakDuration * 60;
  const fullCycleDuration = 3 * sessionDuration + longBreakSession;
  const totalCycles = Math.floor(diffSeconds / fullCycleDuration);
  const remainingTime = diffSeconds % fullCycleDuration;
  let additionalBlocks = 0;
  let remaining = remainingTime;
  while (remaining >= 25 * 60) {
    additionalBlocks++;
    remaining -= (additionalBlocks % 4 === 0 ? longBreakSession : sessionDuration);
  }
  return 25 * 60;
}

function startPomodoro(taskId) {
  const task = tasks.find(t => t.id === taskId);
  const lang = localStorage.getItem("language") || "pt";
  if (!task) {
    alert(translations[lang].noTasks || "Nenhuma tarefa selecionada!");
    return;
  }
  if (!schedule.startTime || !schedule.endTime) {
    alert(translations[lang].noTasks || "Por favor, defina o horário de início e fim.");
    return;
  }

  const now = new Date();
  const [hours, minutes] = schedule.startTime.split(":").map(Number);
  const startTime = new Date();
  startTime.setHours(hours, minutes, 0, 0);
  const [endHours, endMinutes] = schedule.endTime.split(":").map(Number);
  const endTime = new Date();
  endTime.setHours(endHours, endMinutes, 0, 0);

  if (now > endTime) {
    alert(`${translations[lang].endTimeTitle} ya pasó! Por favor, actualiza el horario.`);
    return;
  }

  if (now < startTime) {
    startTimerCountdown(schedule.startTime, taskId);
    return;
  }

  if (pomodoroInterval) clearInterval(pomodoroInterval);
  currentTaskId = taskId;
  isWorking = true;
  timeLeft = calculatePomodoroSessions();
  isPomodoroActive = true;
  pomodoroStartTime = new Date();
  sessionCount = 0;
  updateTimerDisplay();
  pomodoroInterval = setInterval(() => {
    runPomodoro();
  }, 1000);
  toggleSections();
}

function runPomodoro() {
  const lang = localStorage.getItem("language") || "pt";
  timeLeft--;
  updateTotalTime();
  if (timeLeft <= 0) {
    isWorking = !isWorking;
    if (isWorking) {
      sessionCount++;
      completedSessions++;
      updateSessionStats();
      saveStats();
      openConfirmModal(currentTaskId);
    } else {
      startPause(false);
    }
  }
  updateTimerDisplay();
}

function endPomodoro() {
  clearInterval(pomodoroInterval);
  clearInterval(startTimerInterval);
  clearInterval(pauseInterval);
  document.getElementById("pomodoroMessage").textContent = "";
  document.getElementById("sessionStats").textContent = "";
  currentTaskId = null;
  isPomodoroActive = false;
  sessionCount = 0;
  saveStats();
  toggleSections();
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const lang = localStorage.getItem("language") || "pt";
  const task = tasks.find(t => t.id === currentTaskId);
  document.getElementById("timer").textContent = task
    ? `${translations[lang].currentTask}${task.name} - ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
    : `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  updateSessionStats();
}

// Progress Chart
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
    document.getElementById("progressMessage").textContent = translations[lang].congrats;
    openCompletionModal();
  } else {
    document.getElementById("progressMessage").textContent = "";
  }
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  setInitialTheme();
  document.getElementById("themeToggle").addEventListener("change", toggleTheme);
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", handleSystemThemeChange);

  const savedLang = localStorage.getItem("language") || getBrowserLang();
  document.getElementById("languageSelect").value = savedLang;
  setLanguage(savedLang);
  document.getElementById("languageSelect").addEventListener("change", e => setLanguage(e.target.value));

  document.getElementById("longBreakDuration").value = longBreakDuration;
  document.getElementById("longBreakDuration").addEventListener("change", e => {
    longBreakDuration = parseInt(e.target.value);
    localStorage.setItem("longBreakDuration", longBreakDuration);
  });

  document.getElementById("addTask").addEventListener("click", () => {
    const name = document.getElementById("taskName").value;
    const lang = localStorage.getItem("language") || "pt";
    if (name) {
      addTask(name);
      document.getElementById("taskName").value = "";
    } else {
      alert(translations[lang].taskPlaceholder);
    }
  });

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
        alert(`${translations[lang].endTimeTitle} debe ser posterior a ${translations[lang].startTimeTitle}!`);
        return;
      }
      schedule = { startTime, endTime };
      isScheduleSet = true;
      saveSchedule();
      toggleSections();
    } else {
      alert("Por favor, define el horario de inicio y fin.");
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
    document.getElementById("startPomodoro").style.display = "none";
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
      alert("Por favor, selecciona una duración para el descanso largo.");
    }
  });

  document.getElementById("updateLongBreak").addEventListener("click", () => {
    document.getElementById("longBreakDuration").disabled = false;
    document.getElementById("setLongBreak").style.display = "inline-block";
    document.getElementById("updateLongBreak").style.display = "none";
    document.getElementById("startPomodoro").style.display = "none";
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
    document.getElementById("startPomodoro").style.display = "none";
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
    if (!isScheduleSet || !isLongBreakSet) {
      alert("Por favor, define el horario y la duración del descanso largo antes de iniciar.");
      return;
    }
    const nextTask = tasks.find(t => !t.completed);
    if (nextTask) {
      startPomodoro(nextTask.id);
    } else {
      alert(translations[lang].noTasks || "¡No hay tareas para iniciar! Agrega una tarefa.");
    }
  });

  document.getElementById("cancelEdit").addEventListener("click", closeEditModal);
  document.querySelector("#pomodoroInfoModal .close-modal").addEventListener("click", closePomodoroInfoModal);
  document.getElementById("closeCompletion").addEventListener("click", closeCompletionModal);
  document.getElementById("exportCompletion").addEventListener("click", exportCompletionAsPNG);
  document.getElementById("resetSystem").addEventListener("click", resetSystem);
  document.querySelector(".info-icon").addEventListener("click", openPomodoroInfoModal);

  renderTasks();
  toggleSections();
});