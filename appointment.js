class AppointmentSchedule {
    constructor() {
      this.appointments = []; 
    }
  
    addAppointment(doctorAvailability, patientPreference) {
      const availableTime = doctorAvailability.find(time => patientPreference.includes(time));
      if (availableTime) {
        const appointment = {
          doctor: 'Doctor',
          patient: 'Patient',
          time: availableTime
        };
        this.appointments.push(appointment);
        this.sendReminder(appointment); 
        console.log(`Appointment scheduled at ${availableTime}.`);
      } else {
        console.log('No matching availability found.');
      }
    }
  
  
    sendReminder(appointment) {
      console.log(`Reminder sent for appointment at ${appointment.time}.`);
    }
  }
  const schedule = new AppointmentSchedule();
  const doctorAvailability = ['10:00', '11:00', '14:00'];
  const patientPreference = ['11:00', '15:00'];
  
  schedule.addAppointment(doctorAvailability, patientPreference);
  