export const formatedDataSessionDay = (request) =>
  request.data.sessions.map((session) => {
    switch (session.day) {
      case 1:
        return { ...session, day: "L" };
      case 2:
        return { ...session, day: "M" };
      case 3:
        return { ...session, day: "M" };
      case 4:
        return { ...session, day: "J" };
      case 5:
        return { ...session, day: "V" };
      case 6:
        return { ...session, day: "S" };
      case 7:
        return { ...session, day: "D" };
      default:
        return { ...session };
    }
  });

export const formatedDataKind = (request) =>
  request.data.data.map((data) => {
    switch (data.kind) {
      case 1:
        return { ...data, kind: "Cardio" };
      case 2:
        return { ...data, kind: "Energie" };
      case 3:
        return { ...data, kind: "Endurance" };
      case 4:
        return { ...data, kind: "Force" };
      case 5:
        return { ...data, kind: "Vitesse" };
      case 6:
        return { ...data, kind: "Intensité" };
      default:
        return { ...data };
    }
  });
