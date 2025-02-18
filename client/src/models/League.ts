import { LeagueSettings } from './LeagueSettings';
import { ScoringSettings } from './ScoringSettings';
import { LeagueMetadata } from './LeagueMetadata';

export interface League {
  league_id: string;
  name: string;
  season: string;
  season_type: string;
  sport: string;
  status: 'pre_draft' | 'drafting' | 'in_season' | 'complete' | string;
  total_rosters: number;
  draft_id: string;
  previous_league_id: string | null;
  avatar: string | null;
  roster_positions: string[];
  scoring_settings: ScoringSettings;
  settings: LeagueSettings;
  metadata: LeagueMetadata;
  last_message_text_map: string | null;
  last_author_avatar: string | null;
  last_author_display_name: string;
  last_message_time: number;
  last_message_attachment: string | null;
  last_read_id: string;
  company_id: string | null;
  last_author_is_bot: boolean;
  shard: number;
  last_author_id: string;
  last_pinned_message_id: string;
  last_transaction_id: string;
  last_message_id: string;
  display_order: number;
  bracket_id: number;
  loser_bracket_id: number;
  bracket_overrides_id: string | null;
  loser_bracket_overrides_id: string | null;
  group_id: string | null;
}
