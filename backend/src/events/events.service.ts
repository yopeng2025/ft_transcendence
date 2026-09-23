import { Injectable, NotFoundException } from '@nestjs/common';
import { title } from 'process';

@Injectable()
export class EventsService {
    private events = [
        {
            id: 1,
            title: 'Interstellar Movie Night',
            movie: 'Interstellar',
            type: 'MOVIE_NIGHT',
            date: '2026-10-10',
            time: '19:00',
            locationType: 'IN_PERSON',
            city: 'Paris',
            venue: 'Pathé Bercy',
            description: 'Watch Interstellar together and discuss the movie.',
            maxParticipants: 12,
            participants: 8,
            status: 'APPROVED',
            organizer: 'Alice',
            },
            {
            id: 2,
            title: 'Dune: Part Two Discussion',
            movie: 'Dune: Part Two',
            type: 'MOVIE_DISCUSSION',
            date: '2026-10-12',
            time: '15:00',
            locationType: 'ONLINE',
            platform: 'Discord',
            meetingLink: 'https://discord.com/example',
            description: 'Online discussion about Dune: Part Two.',
            maxParticipants: 20,
            participants: 15,
            status: 'APPROVED',
            organizer: 'Bob',
            },
    ];
  

  getEvents() {
      return this.events;
    }
}
